/**
 * Created by li on 2017/12/22 17:26.
 */
const request = require('request-promise')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')

const decodeType = "gbk"

const getHtml = async (uri) => {
    const buffer = await request({uri,encoding:null})
    const string = iconv.decode(buffer,decodeType)
    return string
    //const $ = cheerio.load(string)

}








module.exports = {
    getHtml
}