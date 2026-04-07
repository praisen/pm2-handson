const http = require('http');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello from PM2 app\nEnvironment: ${NODE_ENV}\nPort: ${PORT}\nTime: ${new Date().toISOString()}\n`);
});

server.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
  console.log(`Running in ${NODE_ENV} mode`);
});

process.on('SIGINT', () => {
  console.log('App received SIGINT, shutting down gracefully...');
  process.exit(0);
});
