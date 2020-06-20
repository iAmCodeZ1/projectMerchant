const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const url = 'mongodb+srv://n3m0:spartan13@cluster0-ofxcy.mongodb.net/Merchant?retryWrites=true&w=majority';

const storage = new GridFsStorage({url});

const upload = multer({storage});

const Product = require('../../models/product');

let gfs;

// Test db connection
    let conn = mongoose.createConnection(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    conn.once('open', () => {
        gfs = Grid(conn.db, mongoose.mongo);
    });

// GET ALL PRODUCTS FROM LIST
    router.get('/', (req, res) => {
        Product.find({}, (err, products) => {
            if(err) {
                console.log(err);
                res.status(400).json(err);
            } else {
                res.status(200).json(products);
            }
        });
    });

// POST A PRODUCT
    router.post('/', upload.single('image'), (req, res) => {
        let newProduct = new Product({
            productName: req.body.productName,
            srp: req.body.srp,
            discountedPrice: req.body.discountedPrice,
            desc: req.body.desc,
            image: req.file.filename
        });

        Product.create(newProduct, (err, product) => {
            if(err) {
                console.log(err);
                res.status(400).json(err);
            } else {
                product.save();
                console.log('New product added: ' + product);
                res.status(200).json();
            }
        });
    });

// @TEST Get IMAGE
    router.get('/image/:filename', (req, res) => {
        gfs.files.findOne({filename: req.params.filename}, (err, file) => {
            if(err) {
                console.log(err);
            } else {
                let readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res);
            }
        });
    });

module.exports = router;