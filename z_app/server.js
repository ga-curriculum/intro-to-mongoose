const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000')
})




const Todo = require('./models/todo.js');

app.get('/run-queries', async (req, res) => {
  await createTodo();
  res.send('Check your VS Code terminal.')
});

const createTodo = async () => {
  const todoData = {
    text: "Learn JS",
    isComplete: false,
  };

  const todo = await Todo.create(todoData);
  console.log("New todo:", todo);
};

const findTodos = async () => {
  const todos = await Todo.find({});
  console.log("All todos:", todos);
};

