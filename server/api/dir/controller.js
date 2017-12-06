/**
 * Created by li on 2017/12/6.
 */
const path = require('path')
const fs = require('fs')
const config = require('../../config/env/')


exports.dir = async (ctx,next)=>{
    /**
     * 根目录在config.root里面
     * */
    let arr = []
    const readDir = function (dir){
        fs.readdir(dir,(err,files)=>{
            files.forEach((filename,index,_arr)=>{
                fs.fstat(path.join(dir,filename),(err,stats)=>{
                    if(stats.isDirectory()){
                        readDir(path.join(dir,filename))
                    } else {
                        arr.push(filename)
                    }
                })
            })
        })
    }

    ctx.body = {
        arr:readDir(config.root)
    }

}

