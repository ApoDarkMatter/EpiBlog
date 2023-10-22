const express = require('express')
const blogPostModel = require('../models/blogPost')
const blogPost = express.Router()
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
require('dotenv').config()
//const crypto = require('crypto')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const cloudStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        format: async (req, file) => 'png',
        public_id: (req, file) => file.name,
    },
})

const cloudUpload = multer({storage: cloudStorage})

blogPost.post('/blogPost/cloudUpload', cloudUpload.single('cover'), async (req, res) => {
    try {
        res.status(200).json({cover: req.file.path})
    } catch(e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
})

blogPost.get('/blogPost', async (req, res) => {
    try {
        const post = await blogPostModel.find().populate('author', 'firstName lastName avatar email')

        res.status(200).send({
            statusCode: 200,
            post
        })
    } catch(e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
})

blogPost.get('/blogPost/:postId', async (req, res) => {
    const {postId} = req.params
    try {
        const post = await blogPostModel.findById(postId).populate('author', 'firstName lastName avatar email')
        if(!post){
            return res.status(404).send({
                statusCode:404,
                message: 'BlogPost Not Found'
            })
        }
        res.status(200).send({
            statusCode: 200,
            post
        })
    } catch(e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
})


blogPost.post('/blogPost', async (req, res) => {
    const newBlogPost = new blogPostModel({
        category: req.body.category,
        title: req.body.title,
        cover: req.body.cover,
        readTime: {
            value: req.body.readTime.value,
            unit: req.body.readTime.unit
        },
        author: req.body.author,
        content: req.body.content
    })

    try {
        const post = await newBlogPost.save()

        res.status(201).send({
            statusCode: 201,
            message: 'BlogPost Saved Correctly',
            post
        })
    } catch (e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
})

blogPost.patch('/bloPost/:postId', async (req, res) => {
    const {postId} = req.params

    const postExist = await blogPostModel.findById(postId)

    if(!postExist) {
        return res.status(404).send({
            statusCode: 404,
            message: 'This Post does not exist'
        })
    }

    try {
        const dataToUpdate = req.body
        const options = {new: true}
        const result = await blogPostModel.findByIdAndUpdate(postId, dataToUpdate, options)

        res.status(200).send({
            statusCode: 200,
            message: 'Internal Server Error',
            result
        })
    } catch (e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
})

blogPost.delete('/blogPost/:postId', async (req, res) => {
    const {postId} = req.params

    try {
        const post = await blogPostModel.findByIdAndDelete(postId)
        if(!post) {
            return res.status(404).send({
                statusCode: 404,
                message: "Post not found or already deleted"
            })
        }

        res.status(200).send({
            statusCode: 200,
            message: "Post deleted successfully"
        })
    } catch (e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
})

module.exports = blogPost