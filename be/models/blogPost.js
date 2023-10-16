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
    },
    readTime: {
        value: {
            type: Number
        },
        unit: {
            type: String,
            default: "minutes",
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
    },
    content: {
        type: String,
        required: false,
    }

},{ timestamps: true, strict: true })

module.exports = mongoose.model('blogPostModel', BlogPostSchema, 'blogPost')