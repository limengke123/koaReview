/**
 * Created by li on 2017/12/6.
 */
const responseTime = require('koa-response-time')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')
//不知道这玩意啥用,先不用
//const koaJson = require("koa-json")
module.exports = (app)=>{
    if(app.env === "development"){
        app.use(responseTime())
        app.use(logger())
    }
    app.use(bodyParser())
    app.use(compress())
}