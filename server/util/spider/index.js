/**
 * Created by li on 2017/12/22 17:26.
 */
const request = require('request-promise')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')
const decodeType = "gbk"
const {GET}  = require('../index')


const get$ = async (url,decodeType="utf8") => {
    const htmlString = await GET(url,decodeType)
    const $ = cheerio.load(htmlString)
    return $
}


module.exports = {
    get$,
}