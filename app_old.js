const http = require('http');

http.createServer((req, res) => {

        res.writeHeader(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Carlos Delgado',
            edad: 28,
            url: req.url
        }
        res.write('Hola mundo');
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080 ...');