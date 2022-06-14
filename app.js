const path = require('path'); // requiere el metodo path
const express = require('express'); // requiere el modulo express
const server = express(); // definimos una const para poder usar el express

const public = path.resolve(__dirname, './public'); 

server.listen(2020, () => console.log('Abriendo el servidor http://localhost:2020 de MercadoLiebre')); // levanta el server

server.use(express.static(public));

server.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'source/views/home.html')))
server.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, 'source/views/register.html')))
server.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, 'source/views/login.html')))