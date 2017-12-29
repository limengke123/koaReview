/**
 * Created by li on 2017/12/29 16:02.
 */
const rp = require('request-promise')
const iconv = require('iconv-lite')
const defaultDecode = "utf8"
const GET = async (uri,decodeType = defaultDecode) => {
    return new Promise(async (resolve,reject) => {
        try{
            const buffer = await rp({
                uri,
                encoding:null
            })
            const string = iconv.decode(buffer,decodeType)
            resolve(string)
        } catch(e){
            console.log(e)
            reject(false)
        }
    })
}


module.exports = {
    GET
}