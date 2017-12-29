/**
 * Created by li on 2017/12/22 17:26.
 */
const request = require('request-promise')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')
const decodeType = "gbk"

const getHtml = async (uri,decodeType = "utf8") => {
    const buffer = await request({uri,encoding:null})
    const string = iconv.decode(buffer,decodeType)
    return string
}

const get$ = async (htmlString) => {
    const $ = cheerio.load(htmlString)
    return $
}

const main = async (uri , decodeType) => {
    const htmlString = await getHtml(uri,decodeType)
    const $ = await get$(htmlString)

}

module.exports = {
    getHtml,
    get$,
    main
}