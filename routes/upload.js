var express = require('express');
var multer = require('multer');
var router = express.Router();
var textDetect = require("./textDetect");
var textTranslate = require("./textTranslate");
var connectWord = require("./connectWord");
var { Data } = require('../models');
var lan;

const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/');
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  });

router.get('/', function(req, res, next) {
  lan = req.query.lan;
  res.render('image');
});

router.post('/result', upload.single('img'), async (req, res, next) => {
    try {
      var path = "uploads/" + req.file.filename;
      const filename = req.file.filename;
      var sizeOf = require('image-size');
      var dimensions = sizeOf(path);

      let menu = await textDetect(filename);
      var info = [];

      for(var i in menu){
        var search = await Data.findOne({
          where: {koname: menu[i].text}
        });
        if(search != undefined){
          if(lan == 'en'){
            menu[i].translation = search.en;
          }
          else{
            menu[i].translation = await textTranslate(menu[i].text, lan);
          }
          menu[i].info = await textTranslate(search.info, lan);
          menu[i].img = search.img;
        }
        else{
          menu[i].translation = await textTranslate(menu[i].text, lan);
        }
      }
      console.log(menu);
    
      
      res.render('result', {path: path, width: dimensions.width, height: dimensions.height, position: menu});

      /*
      text.forEach((t) => {
        console.log(t.description);
        console.log("=> " + t.translation);
        console.log(t.boundingPoly);
        console.log("--------------------");
      });*/

    }
    catch(err){
      console.error(err);
    }

  });
 

module.exports = router;