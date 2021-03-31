require('dotenv').config()
require('./dbconfig')
const express = require('express')
const app = express()

app.use(express.json())
app.use('/',require('./routers/index'))
app.listen(process.env.PORT,(err)=>{
    if(!err)
    console.log('server connected...');
    else
    console.log('error in connecting to server');
})