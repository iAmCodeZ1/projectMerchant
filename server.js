const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// CONFIGURE CORS
    app.use(cors({
        origin: ['http://localhost:4200', 'https://127.0.0.1:4200'],
        credentials: true
    }));

// IMPORTED ROUTES
    const productList = require('./server/routes/products-routes/products-list');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

// BODY PARSER CONFIGURATION
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

// ROUTING SECTION
    app.use('/products-list', productList);

    app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist/merchant-web-app/index.html')));

// SETUP DATABASE
    const dbUrl = 'mongodb+srv://n3m0:spartan13@cluster0-ofxcy.mongodb.net/Merchant?retryWrites=true&w=majority';

    app.set('dbUrl', dbUrl);

    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err) {
            console.log('Error in connecting to database: ' + err);
        } else {
            console.log('Successfully connected to database...');
        }
    }).
    catch(error => handleError(error));

app.listen(port, () => console.log("Server running in port: " + port));