/**
 * Created by li on 2017/12/5.
 */
const path = require('path')
const _ = require('lodash')
const fs = require('fs')

const all = {
    port:process.env.PORT || 9000
}

let config = _.merge(all,require(path.join("./",process.env.NODE_ENV,".js") || {}))

module.export = config

