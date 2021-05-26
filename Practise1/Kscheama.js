const mongoose = require('mongoose')
const kscheama = mongoose.Schema;

const kscheam = new kscheama({
    name: {
        type: String

    },
    village: {
        type: String
    }
});

const kcollection = mongoose.model("kmodel", kscheam);
module.exports = kcollection;