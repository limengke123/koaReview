/**
 * Created by li on 2017/12/29 16:04.
 */
const router = require('koa-router')()
const controller = require('../contoller')
const {spider} = controller

router.get('/download',spider.download)
router.get('/showPic',spider.showPic)
router.get('/dytt',spider.dytt)
router.get('/',spider.sp)


module.exports = router