const app = require('../server/app.js')
const config = require('../server/config/')
app.listen(config.port,()=>{
    console.log('Koa server listening on %d, in %s mode', config.port, app.env)
})