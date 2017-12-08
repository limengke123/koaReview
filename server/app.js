process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const Koa = require('koa')
const app = new Koa()
const logger = require('./util/logs/index')
const errorMiddle = require('./util/error/index')
app.use(async (ctx,next)=>{
    ctx.logger = logger
    await next()
})

app.use(errorMiddle())
require("./config/koa.js")(app)
require("./route")(app)
app.on('error',(err,ctx)=>{
    if (process.env.NODE_ENV !== 'test') {
        console.error('error', err)
    }
})
module.exports = app