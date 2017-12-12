/**
 * Created by li on 2017/12/5.
 */
const Router = require('koa-router')()
const dir = require('./api/dir')
const article = require('./api/article')
const fs = require('fs')
const path = require('path')
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
        //ctx.body = 2
    })
    Router.get('/*', (ctx, next) => {
        // ctx.body = "hi man,it seems that you got lost here!"
        ctx.render('index', {data: 'fk'})
    })
    app.use(Router.routes())
}