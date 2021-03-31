const mongoose = require('mongoose')

const empLoingSchema = new mongoose.Schema({
    empId:{
        type: Number,
        required : true,
        unique : true
    },
    userName:{
        type: String,
        required : true,
        unique: true
    },
    password: {
        type: String,
        required : true
    },
    passwordFlag : {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('empLogin',empLoingSchema)