let socket = io();
socket.on('connect', function() {
  console.log('connected to server');

  socket.emit('createMessage', {
    from: 'Joe',
    text: 'text here'
  })
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});

socket.on('newMessage', (message) => {
  console.log('newMessage', message);
})
