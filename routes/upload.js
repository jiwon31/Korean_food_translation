var express = require('express');
var multer = require('multer');
var router = express.Router();
var menu = require("./textDetect");

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

router.post('/', upload.single('img'), async (req, res, next) => {
    try {
      res.render('image');
      //console.log(req.file.filename);
      const filename = req.file.filename;
      menu.detectText(filename);
    }
    catch{
      console.err(err);
    }

  });

 

module.exports = router;