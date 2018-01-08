/**
 * Created by li on 2018/1/8 15:54.
 */
const __before = module.exports.beforeFunc = Symbol('__before')
const __after = module.exports.afterFunc = Symbol('__after')
const main = module.exports.main = Symbol('main')

class BaseAop {
    getAopMiddleWare () {
        let before = this[__before]
        let mainFunc = this[main]
        let after = this[__after]
        let that = this

        if(before || after){
            return async function(ctx,next){
                let boundAfter = after ?
                    after.bind(that,ctx,next) :
                    next
                if(before){
                    let boundMain = mainFunc.bind(that,ctx,boundAfter)
                    return before.call(that,ctx,boundMain)
                } else {
                    return mainFunc.call(that,ctx,boundAfter)
                }
            }
        }
         else {
            return mainFunc
        }
    }
}
module.exports.BaseAop = BaseAop