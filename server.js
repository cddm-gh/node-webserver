const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

//=========Variables de entorno globales
//usar el puerto que asigne heroku o el servidor
const port = process.env.PORT || 3000;

//Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

//Petición get cuando el path sea un / o raíz
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Carlos Delgado',
    });
})

app.get('/about', (req, res) => {
    res.render('about', {});
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port} `);
});