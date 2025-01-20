const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get from template');
});

router.post('/', (req, res) => {
    res.send('post to template');
});

module.exports = router;