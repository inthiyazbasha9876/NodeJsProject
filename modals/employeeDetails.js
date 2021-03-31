const mongoose = require('mongoose')

const empDetailsSchema = new mongoose.Schema({
    empId:{
        type: Number,
        required : true,
        unique : true
    },
    firstName:{
        type: String,
        required : true
    },
    lastName: {
        type: String,
        required : true
    },
    middleName : {
        type: String,
        required:false
    },
    DateOfBirth : {
        type: String,
        required:true
    },
    email:{
        required: true,
        type:String,
        unique : true
    },
    mobileNumber:{
        required: true,
        type: Number
    },
    role:{
        required: true,
        type: String
    },
    createdDate:{
        type:Date,
        default: Date.now
    },
    status:{
        type:Boolean,
        default:true
    }
})

module.exports = mongoose.model('empDetails',empDetailsSchema)