// Make connection
const socket = io.connect('http://localhost:4000');

// Query DOM
const message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');

// Emit events
btn.addEventListener('click', () => {
  socket.emit('chat', {
      message: message.value,
      handle: handle.value
  });
  message.value = "";
});

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
})

// Listen for events
socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', (data) => {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});