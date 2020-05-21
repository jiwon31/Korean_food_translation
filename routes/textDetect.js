//'use strict';
module.exports = async function (fileName) {
    const vision = require('@google-cloud/vision');
    const client = new vision.ImageAnnotatorClient();

    const path = 'uploads/'+fileName;
    const [result] = await client.documentTextDetection(path);
    const detections = result.textAnnotations;

    array = [];
    detections.forEach(text => array.push({description : text.description, boundingPoly : text.boundingPoly.vertices}));
    //console.log("print array\n");
    //console.log(array);
 
    return array;
};
