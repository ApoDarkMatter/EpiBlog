const mongoose = require('mongoose')

const BlogPostSchema = new mongoose.Schema({
    category: {
        type: String,
        default: "General",
        required: false
    },
    title: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
        //default: 'https://cdn-icons-png.flaticon.com/512/4922/4922073.png'
    },
    readTime: {
        value: {
            type: Number
        },
        unit: {
            type: String
        }
    },
    author: {
        name: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default: 'https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg',
            required: false
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