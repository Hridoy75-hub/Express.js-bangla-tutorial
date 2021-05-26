const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true})


mongoose.connection.once('open', () => {
    console.log('db connected')
}).then('eorre', (eorre) => {
    console.log('hi');
})

module.exports = mongoose;