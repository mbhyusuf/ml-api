const { faceRecognitionHandler } = require('../face-recognition/face-recognition.controller');

module.exports = [
    {
        method: 'POST',
        path: '/predict/face-recognition',
        handler: faceRecognitionHandler,
        options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true,
            }
        }
    },
];