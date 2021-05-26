const express = require('express')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const Veherouter = require('./Vehe')
const Dogrouter = require('./Dog')
const app = express()
const port = 5000




mongoose.connect('mongodb://localhost:27017/tt', { useNewUrlParser: true, useUnifiedTopology: true })
app.use(bodyParser.json())


mongoose.connection.once('open', () => {
  console.log('db connected');
})

app.use('/vehe', Veherouter)
app.use('/dog',Dogrouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {

  var myjson = [
    {
    name: "Hridoy",
    city: "Dhaka",
    occupation:"Student"
  },
    {
    name: "Liton",
    city: "Dhaka",
    occupation:"Student"
    },
    {
    name: "Dipti",
    city: "Tangail",
    occupation:"Houswife"

    }
   
    

  ]
  res.json(myjson)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})