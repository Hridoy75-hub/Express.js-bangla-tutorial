const express = require('express')
const ktablescheama= require('./Kscheama')
const dogrouter =express.Router();

dogrouter.post('/name', (req, res) => {
    console.log(req.body)
    var k = new ktablescheama(req.body)
    k.save()
    res.send(k);
})
dogrouter.get('/all', async (req, res) => {
    try {
        const all = await ktablescheama.find();
        res.json(all);
    }catch(error){}
    
})

module.exports = dogrouter;
