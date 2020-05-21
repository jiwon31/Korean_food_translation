//'use strict';
module.exports = async function (fileName) {
    const vision = require('@google-cloud/vision');
    const client = new vision.ImageAnnotatorClient();

    const path = 'uploads/'+fileName;
    const [result] = await client.documentTextDetection(path);
    const detections = result.textAnnotations;

    array = [];
    detections.forEach(text => {
        let description = text.description.replace(/[0-9]|,|\s$/gi, "");
        if(description != ""){
            array.push({description : description, boundingPoly : text.boundingPoly.vertices});
        }
    });
    //console.log("print array\n");
    //console.log(array);
 
    return array;
};
