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

module.exports = comment