const http = require('http');
const app = require('./masterRouter');
const socketIPC = require('./socketIPC');

const server = http.Server(app);
server.listen(8080);

socketIPC(server);
