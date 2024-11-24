const tfjs = require('@tensorflow/tfjs-node');

function predict(model, imageBuffer) {
    const tensor = tfjs.node
      .decodeJpeg(imageBuffer)
      .resizeNearestNeighbor([250, 250])
      .expandDims()
      .toFloat();
   
    return model.predict(tensor).data();
}

module.exports = {
    predict,
};