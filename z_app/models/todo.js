const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo