/**
 * Created by li on 2017/12/5.
 */
const path = require('path')
//const fs = require('fs')
const _ = require('lodash')

const all = {
    env:process.env.NODE_ENV,
    port:process.env.PORT || 9000,
    root: path.normalize(__dirname+"/../../.."),
    mongo:{

    }
}

let config = _.merge(all,require(`./${process.env.NODE_ENV.trim()}`) || {})
// console.dir(config)
module.exports = config

