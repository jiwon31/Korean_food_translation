//'use strict';
module.exports = async function (fileName) {
    console.log("detectText함수 실행중\n");
    const vision = require('@google-cloud/vision');
    const client = new vision.ImageAnnotatorClient();

    fileName = '../uploads/menu2.jpg';
    const [result] = await client.documentTextDetection(fileName);
    const detections = result.textAnnotations;

    array = [];
    detections.forEach(text => array.push({description : text.description, boundingPoly : text.boundingPoly.vertices}));
    console.log("print array\n");
    console.log(array);
 
    return array;
};
