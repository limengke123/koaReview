process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const Koa = require('koa')
const app = new Koa()

require("./route")(app)

module.export = app