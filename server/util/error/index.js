/**
 * Created by li on 2017/12/6.
 */
const _ = require('lodash')

const errorMiddle = function(){
    return async (ctx,next)=>{
        try {
           await next()
        } catch(err) {
            ctx.status = err.status || 500
            let error_msg = err.message || "没有err.message的错误"
            if(err.errors && typeof err.errors==="object"){
                _.mapValues(err.errors,item=>{
                    if(item.message){
                        error_msg = item.message
                    }
                })
            }
            ctx.body = {
                error_msg
            }
            ctx.app.emit('error',err,ctx)
        }
    }
}
module.exports = errorMiddle