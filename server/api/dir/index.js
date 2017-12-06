/**
 * Created by li on 2017/12/6.
 */
const router = require('koa-router')()
const controller = require('./controller')

router.get('/',controller.dir)

module.exports = router