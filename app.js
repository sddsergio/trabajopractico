// const http = require('http');
// const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3001;

// app.get("/", (req, res) => {
//     res.send('Hola mundooosssooooo');
// });
app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`App escuchando en el puert ${PORT}`);
});
// const server = http.createServer((req, res) => {
//     const file = fs.readFileSync(__dirname + '/index.html');
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//         'Content-Type': 'text/html; charset=UTF-8'
//     });
//     res.end('Hola mundo');
//     res.end('<h1>Hola mundo</h1>');
//     res.end(file);
// });

// app.listen(PORT, () => console.log('Servidor escuchando en el puerto 3000'));
