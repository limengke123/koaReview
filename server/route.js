/**
 * Created by li on 2017/12/5.
 */
const Router = require('koa-router')()

module.exports = function(app){
    Router.get("/hi",(ctx,next)=>{
        ctx.body = {
            status:true,
            data:"first time be here"
        }
    })
    app.use(Router.routes())
}