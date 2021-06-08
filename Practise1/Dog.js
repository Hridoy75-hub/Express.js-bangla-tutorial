const express = require('express')
const ktablescheama= require('./Kscheama')
const dogrouter =express.Router();

dogrouter.post('/name', (req, res) => {
    console.log(req.body)
    let JSONData = req.body;
    let name= JSONData["name"]
    let city = JSONData["city"]
    res.send(name +" "+ city);
    
})
dogrouter.get('/all', async (req, res) => {
    try {
        const all = await ktablescheama.find();
        res.json(all);
    }catch(error){}
    
})

module.exports = dogrouter;
