const mongoose = require('mongoose')
//const Article = mongoose.model('article')
const {Article} = require('../../model')
exports.getArticle=async function(ctx,next){
    const articles = await Article.find({})
    ctx.body = articles
}