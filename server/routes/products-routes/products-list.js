const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to products list');
})


module.exports = router;