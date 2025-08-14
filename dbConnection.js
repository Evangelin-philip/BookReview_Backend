const mongoose=require('mongoose')
connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDb Connected Successfully");
}).catch((err)=>{
    console.log(`mongoDb connection failed due to ${err}`);
    
})