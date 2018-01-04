/**
 * Created by li on 2017/12/22 17:26.
 */
const cheerio = require('cheerio')
const rp = require('request-promise')
const iconv = require('iconv-lite')
const defaultDecode = "utf8"
const GET = async (uri,decodeType = defaultDecode ,isBuffer = false) => {
    return new Promise(async (resolve,reject) => {
        try{
            const buffer = await rp({
                uri,
                encoding:null
            })
            if(isBuffer){
                resolve(buffer)
            } else {
                const string = iconv.decode(buffer,decodeType)
                resolve(string)
            }
        } catch(e){
            console.log(e)
            reject(false)
        }
    })
}

const get$ = async (url,decodeType="utf8") => {
    const htmlString = await GET(url,decodeType)
    const $ = cheerio.load(htmlString)
    return $
}


module.exports = {
    get$,
    GET
}