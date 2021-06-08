const express = require('express')
const vrouter = express.Router();
const multer  = require('multer')
const app = express()


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null,file.originalname)
    }
})
var upload = multer({ storage: storage }).single('myfile')


//upload form data
vrouter.post('/upload', function(req, res){
    upload(req, res,function(error){
        if(error) {
            res.send("file upload fail")
        }
        else{
            res.send("file upload success")
        }
         
    })
    
});

module.exports = vrouter;
