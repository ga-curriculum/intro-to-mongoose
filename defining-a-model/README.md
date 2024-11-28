<h1>
  <span class="headline">Intro to Mongoose</span>
  <span class="subhead">Defining a Model</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to create and export a Mongoose model.

## Getting started

When working with Mongoose, it's good practice to store model definitions in a dedicated `models` directory. Let's create that directory and a file for our `todos` model.

```bash
mkdir models
touch models/todo.js
```
  > 💡 Model files are always named singularly. 

In `models/todo.js`, we'll want to accomplish the following:

1. We define a schema.
2. Compile the schema into a model.
3. Export the model.

## Define a schema

First, import `mongoose` into our `models/todo.js` file:

```javascript
// models/todo.js
const mongoose = require('mongoose');
```

Next, we'll define the following schema:

```javascript
const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});
```

## Compile the schema into a model

Next we'll want to compile our `todoSchema` into a model:

```javascript
// models/todo.js
const Todo = mongoose.model('Todo', todoSchema);
```

> Reminder: Models, not schemas, contain the functionality to perform CRUD on a MongoDB collection.

Finally, we'll export our `Todo` model, so that we can access its various model methods throughout our application:

```javascript
module.exports = Todo;
```
