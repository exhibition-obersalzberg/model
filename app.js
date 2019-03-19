var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
const SerialPort = require('serialport')
const port = new SerialPort('/dev/ttyS2', {
  baudRate: 9600
})

port.on('data', function (data) {
    if (data[1] == 49) {
        console.log("Pressed")
        io.sockets.emit('on_press', true);
    } else {
        console.log("Released")
        io.sockets.emit('on_press', false);
    }
})