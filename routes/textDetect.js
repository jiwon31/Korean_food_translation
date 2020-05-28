const connectWord = require('./connectWord');

module.exports = async function (fileName) {
    const vision = require('@google-cloud/vision');
    const client = new vision.ImageAnnotatorClient();

    const path = 'uploads/'+fileName;
    const [result] = await client.documentTextDetection(path);
    //const detections = result.textAnnotations;
    //console.log(result);
    const array = await connectWord(result);
    /*array = [];
    detections.forEach(text => {
        //let description = text.description.replace(/[0-9]|,|\s$/gi, "");
        if(!/[0-9]|[()\[\]/.]/.test(text.description[0])){
            let description = text.description;
            array.push({description : description, boundingPoly : text.boundingPoly.vertices});
        }
    });*/
 
    return array
};
