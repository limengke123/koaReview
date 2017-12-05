/**
 * Created by li on 2017/12/5.
 */
const path = require('path')
const _ = require('lodash')
const fs = require('fs')

const all = {
    port:process.env.PORT || 9000
}
console.log(`./${process.env.NODE_ENV}.js`)
console.log(`./${process.env.NODE_ENV.trim()}.js`)
let config = _.merge(all,require(`./${process.env.NODE_ENV.trim()}`) || {})

module.exports = config

