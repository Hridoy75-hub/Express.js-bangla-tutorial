const mongoose = require('mongoose')
 mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

mongoose.connection.once('open', () => {
    console.log('db connected')
}).then('eorre', (eorre) => {
    console.log('hi');
})

module.exports = mongoose;