/**
 * Created by li on 2017/12/5.
 */
const Router = require('koa-router')()
const fs = require('fs')
const path = require('path')
const allRouter = require('./route/index')
const publicPath = path.resolve(__dirname,'../dist/index.html')
module.exports = function (app) {
    Router.use('/spider',allRouter.spider.routes(),allRouter.spider.allowedMethods())
    Router.get('/*', (ctx, next) => {
        ctx.type = 'text/html'
        ctx.body = fs.createReadStream(publicPath)
    })
    app.use(Router.routes())
}