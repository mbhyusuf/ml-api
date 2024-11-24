const { predict } = require('./face-recognition.inference');

const faceRecognitionHandler = async (request) => {
    const { image } = request.payload;
    const { model } = request.server.app;
    const predictions = await predict(model, image);
    return { result: predictions};
};

module.exports = {
    faceRecognitionHandler,
};