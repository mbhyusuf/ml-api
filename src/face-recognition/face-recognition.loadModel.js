require('dotenv').config();
const tfjs = require('@tensorflow/tfjs-node');

const loadModel = () => {
    const modelUrl = "file://models/model.json";
    //const modelUrl = process.env.FACE_RECOGNITION_MODEL;
    return tfjs.loadLayersModel(modelUrl);
};

module.exports = {
    loadModel,
};