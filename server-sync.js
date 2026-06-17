// server-sync.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;

const server = http.createServer((req, res) => {
    try {
        // Operación síncrona: detiene todo hasta que el archivo se lee por completo
        const data = fs.readFileSync(path.join(__dirname, 'documento.txt'), 'utf-8');
        
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`[Servidor Síncrono] Contenido leído:\n\n${data}`);
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno al leer el archivo.');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor SÍNCRONO corriendo en http://localhost:${PORT}`);
});