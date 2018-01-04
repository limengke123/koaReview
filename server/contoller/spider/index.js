/**
 * Created by li on 2017/12/29 16:06.
 */
const {get$} = require('../../util/spider')
const {spider} = require('../../config')
const sp = async (ctx, next) => {
    ctx.body = "spider"
}

const dytt = async (ctx,next) => {
    const {uri,decodeType} = spider.dytt
    const $ = await get$(uri,decodeType)
    const content = $('.content')
    console.dir(content)
    ctx.body =  content.length
}

module.exports = {
    sp,
    dytt
}