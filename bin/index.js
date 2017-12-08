const app = require('../server/app.js')
const config = require('../server/config/env/index.js')
const connectDatabase = require('../server/db/index')
(async ()=>{
    try{
        //const info = await connectDatabase(config.mongo.uri)
        const info = await connectDatabase("mongodb://localhost/li-dev")
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    } catch (err){
        console.log(`unable to connect to database`)
    }
    await app.listen(config.port)
    console.log('Koa server listening on %d, in %s mode', config.port, app.env)
}).catch(err=>console.log(err))
