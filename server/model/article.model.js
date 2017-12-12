/**
 * Created by li on 2017/12/8.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    // author_id:{
    //     type:Schema.type.objectId,
    //     ref:'User'
    // },
    title:{
        type:String,
        unique:true
    },
    content:{
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now
    }
})

ArticleSchema
    .virtual('info')
    .get(function () {
        return {
            _id:this._id,
            title:this.title,
            content:this.content,
            createTime:this.createTime
        }
    })
exports.CommentSchema = ArticleSchema
module.exports = mongoose.model('article',ArticleSchema)
