const Hapi = require('@hapi/hapi');
const { loadModel } = require('../face-recognition/face-recognition.loadModel');
const faceRecognitionRoutes = require('../routes/face-recognition.route');

(async () => {
    const model = await loadModel();
    
    console.log('model loaded!');
    const server = Hapi.server({
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        port: 3000
    });
    server.app.model = model;
    server.route(faceRecognitionRoutes);

    await server.start();

    console.log(`Server start at: ${server.info.uri}`);
    process.on('unhandledRejection', (err) => {
        console.log(err);
        process.exit(1);
    });
})();