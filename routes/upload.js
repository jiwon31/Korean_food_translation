var express = require('express');
var multer = require('multer');
var router = express.Router();
var textDetect = require("./textDetect");
var textTranslate = require("./textTranslate");
var connectWord = require("./connectWord");

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
   res.render('image');
  });

router.post('/result', upload.single('img'), async (req, res, next) => {
    try {
      var path = "uploads/" + req.file.filename;
      const filename = req.file.filename;
      var sizeOf = require('image-size');
      var dimensions = sizeOf(path);

      let menu = await textDetect(filename);
      //let text = await connectWord(detections);
      for(var i in menu){
        console.log(menu[i].text);
        menu[i].translation = await textTranslate(menu[i].text, 'en');
      }

      
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