const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const url = 'mongodb+srv://n3m0:spartan13@cluster0-ofxcy.mongodb.net/Merchant?retryWrites=true&w=majority';

// CREATE STORAGE ENGINE
    const storage = new GridFsStorage({url});

const upload = multer({storage});

const Product = require('../../models/product');

// INITIALIZATION OF gfs VARIABLE
    let gfs;

// CONNECTION TO MONGO DB
    let conn = mongoose.createConnection(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    conn.once('open', () => gfs = Grid(conn.db, mongoose.mongo));

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

// GET SINGLE PRODUCT
    router.get('/:id', (req, res) => {
        Product.findById(req.params.id, (err, foundProduct) => {
            if(err) {
                console.log(err);
                res.status(404).json({err: err});
            } else {
                res.status(200).json(foundProduct);
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
                res.status(400).json({message: err.message});
            } else {
                product.save();
                console.log('New product added: ' + product);
                res.status(200).json({message: 'Prouct uploaded successfully.'});
            }
        });
    });

// DELETE PRODUCT
    router.delete('/:id', (req, res) => {

        Product.findById(req.params.id, (err, foundProduct) => {
            if(err) {
                console.log(err);
            } else  {
                gfs.remove({filename: foundProduct.image}, (err) => {
                    if(err) {
                        console.log(err);
                        res.status(500).json(err);
                    } else {
                        // Find product and delete
                            Product.findByIdAndRemove(req.params.id, (err) => {
                                if(err) {
                                    console.log(err);
                                    res.status(500).json(err);
                                } else {
                                    res.status(200).json({message: 'Successfully deleted a record.'});
                                }
                            });
                    }
                });
            }
        });

    });

// GET IMAGE FROM DATABASE
    router.get('/images/:filename', (req, res) => {
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