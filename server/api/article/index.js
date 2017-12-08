/**
 * Created by li on 2017/12/8.
 */
const router = require('koa-router')()
const controller = require('./controller')

router.get('/',controller.getArticle)

module.exports = router