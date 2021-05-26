const express = require('express')
const vrouter = express.Router();

vrouter.get('/name', (req, res) => {
    res.send('vehe name');
})
vrouter.get('/age', (req, res) => {
    res.send('vehe age');
})

module.exports = vrouter;
