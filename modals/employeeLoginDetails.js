const mongoose = require('mongoose')

const empLoingSchema = new mongoose.Schema({
    userName:{
        type: Number,
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
    },
    status:{
        type:Boolean,
        default:true
    },
    employee :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'empDetails',
        required: true
    }
})

module.exports = mongoose.model('empLogin',empLoingSchema)