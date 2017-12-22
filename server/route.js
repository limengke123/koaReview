/**
 * Created by li on 2017/12/5.
 */
const Router = require('koa-router')()
const dir = require('./api/dir')
const article = require('./api/article')
const fs = require('fs')
const path = require('path')
const spider =require('./util/spider/index')
module.exports = function (app) {
    Router.use('/dir', dir.routes(), dir.allowedMethods())
    Router.use('/article', article.routes(), article.allowedMethods())
    Router.get("/hi", (ctx, next) => {
        ctx.body = {
            status: true,
            data: "first time be here"
        }
    })
    Router.get('/fk', (ctx, next) => {
        let paths = path.resolve(__dirname, '../view/index.html')
        console.log(ctx.url)
        ctx.type = "text/html"
        ctx.body = fs.createReadStream(paths)
    })
    Router.get('/sp', async (ctx, next) => {
        const data = await spider("http://www.dytt8.net/html/gndy/dyzz/20171221/55853.html")
        ctx.type = "text/plain"
        ctx.body = {
            string:data
        }
    })
    Router.get('/*', (ctx, next) => {
        ctx.body = "hi man,it seems that you got lost here!"
    })
    app.use(Router.routes())
}