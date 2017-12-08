process.env.NODE_ENV = 'development'
const app = require('../server/app.js')
const config = require('../server/config/env/index.js')
const connectDatabase = require('../server/db/index')
const port = 9000
const connect = async function(url){
    const info = await connectDatabase(url)
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    try{
        await app.listen(port)
        console.log(`fk server is started on ${port}`)
    }catch (err){
        console.log(`app makes wrong ${err}`)
    }
}

connect(`mongodb://localhost/testdb1`)
    .catch(err=>{
        console.log(`fk server`);console.dir(err)
    })
