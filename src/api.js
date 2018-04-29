import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

export function sendMessage(info) {
  socket.emit('sendMessage', info);
  // updatePendingMessages('test1',message);
}


export function updateMessage(information) {
  socket.emit('updateMessage', information);
}

export function updatePendingMessages(sender, messages) {
  // redis.set('pendingMessages-' + sender, messages);
  // JSON.stringify()
  // socket.emit('pendingMessages',sender,messages);
}
