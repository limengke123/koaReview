const app = require('../server/app.js')
const config = require('../server/config/env/index.js')
app.listen(config.port,()=>{
    console.log('Koa server listening on %d, in %s mode', config.port, app.env)
})