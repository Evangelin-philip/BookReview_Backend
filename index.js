require('dotenv').config()
require('./dbConnection')
const express=require('express')
const cors=require('cors')
const route = require('./Routes')
const appServer=express()
appServer.use(cors())
appServer.use(express.json())
appServer.use('/api',route)
const PORT = process.env.PORT || 4000;

appServer.get('/',(req,res)=>{
    res.send("WELCOME TO BOOK REVIEW SERVER")
})
appServer.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
});