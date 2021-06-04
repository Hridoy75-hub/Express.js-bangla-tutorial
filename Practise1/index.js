const express = require('express')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const Veherouter = require('./Vehe')
const Dogrouter = require('./Dog')
const app = express()
const port = 5000




 mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
app.use(bodyParser.json())


mongoose.connection.once('open', () => {
  console.log('db connected')
})

app.use('/vehe', Veherouter)
app.use('/dog', Dogrouter)

//string response
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//json response
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
//download response
app.get('/upload', (req, res) => {
  res.download("./Database.js")
})

//redirect response
app.get('/Bangladesh', (req, res) => {
  res.redirect("http://localhost:5000/India")
})

app.get('/India', (req, res) => {
  res.send("This is India")
})

//header response

//response cookie
app.get('/cookie', (req, res) => {

  res.cookie("name", "Hridoy")
  res.cookie("city", "Dhaka")
  res.cookie("age", "19 year")
  
  res.end("Cookie set succes")
  
})
//clear cookie response
app.get('/cooki', (req, res) => {

  res.clearCookie("name", "Hridoy")
  
  res.clearCookie("age", "19 year")
  
  res.end("Cookie clear succes")
  
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

