const express = require('express')
const app = express()
const port = 3000


app.use('/about', function (req, res, next) {
    console.log('I am application level middleware')
    next();
})

app.get('/', (req, res) => {
    res.send('This is Home page')
})

app.get('/about', (req, res) => {
    res.send('This is About page')
})

app.get('/contact', (req, res) => {
    res.send('This is Contact page')
})






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})