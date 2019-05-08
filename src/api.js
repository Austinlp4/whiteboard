import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function subscribeToDrawings(cb){
    socket.on('drawing', cb);
    socket.emit('subscribeToDrawings');
}

function createDrawing(name) {
    socket.emit('createDrawing', { name })
} 

function subscribeToDrawingLines(drawingId, cb) {
    socket.on(`drawingLine:${drawingId}`, cb);
    socket.emit('subscribeToDrawingLines', drawingId)
}

export {
    subscribeToDrawings,
    createDrawing,
    subscribeToDrawingLines
}