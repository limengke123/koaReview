/**
 * Created by li on 2018/1/8 16:09.
 */

const {
    BaseAOP,
    __before,
    __after,
    main
} = require('../util/aop')

const joi = require('joi')

const {
    articles:ROUTER_NAME
} = require('../config/index.js').baseConfig.routerName

module.exports.init = async router => {
    router.post(`/${ROUTER_NAME}`)
}

class ActionCreate extends BaseAOP {
    static schema = joi.object().keys({
        title: joi.string().required(),
        tags: joi.array().items(joi.number()).unique().allow(null),
        excerpt : joi.string().required(),
        content:joi.string().required()
    })

    async [__before] (ctx,next) {
        const body = ctx.request.body
        const {error} = joi.validate(body,this.constructor.schema,{allowUnknown:true})
        if(error){
            ctx.throw(400,{

            })
        }
    }
}