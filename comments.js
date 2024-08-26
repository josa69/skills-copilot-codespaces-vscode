// Create web server 

// Require the express module
const express = require('express')

// Create an express application
const app = express()

// Require the comments module
const comments = require('./comments')

// Require the body-parser module
const bodyParser = require('body-parser')

// Use the body-parser middleware with the app
app.use(bodyParser.json())

// Create a GET route that returns the comments
app.get('/comments', (req, res) => {
  res.json(comments)
})

// Create a POST route that adds a new comment
app.post('/comments', (req, res) => {
  const comment = req.body
  comments.push(comment)
  res.status(201).json(comment)
})

// Create a DELETE route that deletes a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id
  comments.splice(id, 1)
  res.status(200).json(id)
})

// Start the server on port 4001
app.listen(4001, () => {
  console.log('Server listening on port 4001')
})