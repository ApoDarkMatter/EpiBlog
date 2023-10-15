const mongoose = require('mongoose')

const BlogPostSchema = new mongoose.Schema({
    category: {
        type: String,
        default: "General"
    },
    title: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        default: 'https://cdn-icons-png.flaticon.com/512/4922/4922073.png'
    },
    readTime: {
        value: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            default: 'Minutes'
        }
    },
    author: {
        name: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        }
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'AuthorModel'
    },
    content: {
        type: String,
        required: true,
    }

},{ timestamps: true, strict: true })

module.exports = mongoose.model('BlogPostModel', BlogPostSchema, 'blogPost')