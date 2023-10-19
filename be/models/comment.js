const mongoose = require('mongoose')

const PostCommentsSchema = new mongoose.Schema({
    rate: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blogPostModel'
    },
    content: {
        type: String,
        required: false,
    }

},{ timestamps: true, strict: true })

module.exports = mongoose.model('PostCommentsModel', PostCommentsSchema, 'postComments')