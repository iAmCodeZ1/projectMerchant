const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const productList = require('./server/routes/products-routes/products-list');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ROUTING SECTION

app.use('/products-list', productList);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist/merchant-web-app/index.html')));

app.listen(port, () => console.log("Server running in port: " + port));