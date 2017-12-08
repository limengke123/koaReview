const mongoose = require('mongoose')
const Article = mongoose.model('Article')
exports.getArticle= function(ctx,next){
    ctx.body = "article"
}