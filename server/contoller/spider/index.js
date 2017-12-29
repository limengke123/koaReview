/**
 * Created by li on 2017/12/29 16:06.
 */
const sp = async (ctx, next) => {
    ctx.body = "spider"
}

const dytt = async (ctx,next) => {
    ctx.body =  "dytt"
}

module.exports = {
    sp,
    dytt
}