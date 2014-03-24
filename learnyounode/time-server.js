var net = require('net');
var strftime = require('strftime');

var server = net.createServer(handleSocket);
var port = process.argv[2];
server.listen(port);

function handleSocket(socket) {
	var now = strftime('%Y-%m-%d %H:%M\n');
	socket.end(now);
}