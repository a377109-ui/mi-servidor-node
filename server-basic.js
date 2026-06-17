// server-basic.js
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('¡Hola Mundo desde un servidor HTTP en Node.js!\n');
});

server.listen(PORT, () => {
    console.log(`Servidor básico corriendo en http://localhost:${PORT}`);
});