/**
 * Created by li on 2017/12/29 16:06.
 */
const {GET,get$} = require('../../util')
const {spiderConfig} = require('../../config')
const {uri,decodeType} = spiderConfig.dytt
const sp = async (ctx, next) => {
    ctx.body = "spider"
}

const dytt = async (ctx,next) => {
    try{
        const $ = await get$(uri,decodeType)
        const data = $(".title_all").find('p').text()
        console.log(data)
        ctx.body =  "dytt"
    } catch (e) {
        console.log(e)
        ctx.boyd = "Error"
    }
}

const download = async (ctx,next) => {
    const buffer = await GET("http://dev.zwu.flyread.local/image/holiday/bgTmp_zwu.png",void 0,true)
    console.log(buffer)
    const picPath = require('path').resolve(__dirname,'../../../logs/img.jpeg')
    console.log(picPath)
    require('fs').writeFile(picPath,buffer,(e)=>{
        if(!e){
            ctx.body = "download is ok"
        }
    })
}

const showPic = async (ctx, next) => {
    const fs = require('fs')
    const path = require('path')
    const picPath = path.resolve(__dirname,'../../../logs/img.jpeg')
    ctx.type = 'image/jpeg'
    const rs = fs.createReadStream(picPath)
    ctx.body = rs
}

module.exports = {
    sp,
    dytt,
    download,
    showPic,
}