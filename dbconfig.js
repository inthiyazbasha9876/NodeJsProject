const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true})
const con = mongoose.connection
con.on('open',(err)=>{
    if(!err)
    console.log('database connect...');
    else
    console.log('error in database connection');
})