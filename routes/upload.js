var express = require('express');
var multer = require('multer');
var router = express.Router();
var textDetect = require("./textDetect");
var textTranslate = require("./textTranslate");

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
      res.render('result');
      const filename = req.file.filename;
      let text = await textDetect(filename);
      
      for(var i in text){
        text[i].translation = await textTranslate(text[i].description, 'en');
      }

      text.forEach((t) => {
        console.log(t.description);
        console.log("=> " + t.translation);
        console.log(t.boundingPoly);
        console.log("--------------------");
      });

    }
    catch(err){
      console.error(err);
    }

  });
 

module.exports = router;