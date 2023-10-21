const express = require('express')
const comment = express.Router()
const postCommentsModel = require("../models/comment")
require('dotenv').config()

comment.get('/blogPost/:id/comments', async (req, res) => {
    const {id} = req.params
    
    try {
        const comments = await postCommentsModel.findById(id)

        if(!comments) {
            return res.status(404).send({
                statusCode: 404,
                message: 'Comments not found for this post'
            })
        }

        res.status(200).send({
            statusCode: 200,
            comments
    })
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
    
})

comment.post('/blogPost/:id', async (req, res) => {
    const newComment = new postCommentsModel({
        comment: req.body.comment,
        rate: req.body.rate,
        authorId: req.body.authorId,
        postId: req.body.postId
    })

    try {
        const comment = await newComment.save()

        res.status(201).send({
            statusCode: 201,
            message: 'Comment Saved Correctly',
            comment
        })
    } catch (e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
})

module.exports = comment