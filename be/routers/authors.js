const express = require('express')
const AuthorModel = require('../models/author')
const author = express.Router()

author.get('/authors', async (req, res) => {
    try {
        const authors = await AuthorModel.find()

        res.status(200).send({
            statusCode: 200,
            authors
        })
    } catch(e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
})

author.get('/authors/:authorId', async (req, res) => {
    const {authorId} = req.params
    try {
        const authors = await AuthorModel.findById(authorId)
        if(!authors){
            return res.status(404).send({
                statusCode:404,
                message: 'Author Not Found'
            })
        }
        res.status(200).send({
            statusCode: 200,
            authors
        })
    } catch(e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
})

author.post('/authors', async (req, res) => {
    const newAuthor = new AuthorModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        bornDate: req.body.bornDate,
        avatar: req.body.avatar,
    })

    try {
        const author = await newAuthor.save()

        res.status(201).send({
            statusCode: 201,
            message: 'Author Saved Correctly',
            author
        })
    } catch (e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
})

author.patch('authors/:authorId', async (req, res) => {
    const {authorId} = req.params

    const authorExist = await AuthorModel.findById(authorId)

    if(!authorExist) {
        return res.status(404).send({
            statusCode: 404,
            message: 'This Author does not exist'
        })
    }

    try {
        const dataToUpdate = req.body
        const options = {new: true}
        const result = await AuthorModel.findByIdAndUpdate(authorId, dataToUpdate, options)

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

author.delete('/authors/:authorId', async (req, res) => {
    const authorId = req.params

    try {
        const author = await AuthorModel.findByIdAndDelete(authorId)
        if(!author) {
            return res.status(404).send({
                statusCode: 404,
                message: "Author not found or already deleted"
            })
        }

        res.status(200).send({
            statusCode: 200,
            message: "Author deleted successfully"
        })
    } catch (e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        })
    }
})

module.exports = author