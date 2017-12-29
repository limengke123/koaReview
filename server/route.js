/**
 * Created by li on 2017/12/5.
 */
const Router = require('koa-router')()
const fs = require('fs')
const path = require('path')
const allRouter = require('./route/index')
module.exports = function (app) {
    Router.use('/spider',allRouter.spider.routes(),allRouter.spider.allowedMethods())
    Router.get('/*', (ctx, next) => {
        ctx.body = "hi man,it seems that you got lost here!"
    })
    app.use(Router.routes())
}