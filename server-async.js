// server-async.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3002;

const server = http.createServer((req, res) => {
    // Operación asíncrona: Node sigue recibiendo peticiones mientras se lee el archivo
    fs.readFile(path.join(__dirname, 'documento.txt'), 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('Error interno al leer el archivo.');
        }
        
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`[Servidor Asíncrono] Contenido leído:\n\n${data}`);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor ASÍNCRONO corriendo en http://localhost:${PORT}`);
});