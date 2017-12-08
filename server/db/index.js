/**
 * Created by li on 2017/12/7.
 */
const mongoose = require("mongoose")
const connectDatabase = (url)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connection
            .on("error",err=>reject(err))
            .on("close",()=>console.log("close"))
            .on("open",()=>resolve(mongoose.connections[0]))
            mongoose.connect(url,{useMongoClient:true})
    })
}

module.exports = connectDatabase