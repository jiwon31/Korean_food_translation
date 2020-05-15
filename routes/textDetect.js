'use strict';
const menu = {};
menu.detectText = async function (fileName) {

    // [START vision_text_detection]
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    //fileName = '이미지파일 경로';

    // Performs text detection on the local file
    const [result] = await client.textDetection(fileName);
    const detections = result.textAnnotations;
    console.log('Text:');
    detections.forEach(text => console.log(text));
    // [END vision_text_detection]
}

//detectText().catch(console.error);

module.exports = menu;
