# ![Intro to Mongoose - Level Up - Middleware](./assets/middleware.png)

**Learning objective:** By the end of this lesson, students will understand the fundamentals of Mongoose middleware.

Middleware in Mongoose are functions executed at specific stages of a document's lifecycle. They allow us to execute code before or after database operations (such as saving a document). This enables custom behavior like data validation, modification, or logging.

## Types of middleware

Mongoose offers several types of middleware, each based on where and how they are executed:

- **Document Middleware**: Occurs at the document level. It is ideal for tasks such as password hashing or data validation before a document is saved.

- **Model Middleware**: Occurs at the model level. It is helpful for tasks like a *cascading delete*, where you might want to remove all related comments when a blog post is deleted.

- **Query Middleware**: Occurs during query operations. It is useful for modifying queries or processing results.

> 📚 A *cascading delete* is the automatic deletion of related records in a database when a primary record is removed.
>

## `pre` and `post`

All these types of middleware revolve around the use of special functions called `pre` and `post`:

- **`pre`**: Executed **before** a specified operation. Useful for modifying data before it is saved to the database.

- **`post`**: Executed **after** an operation is completed. Useful for follow-up tasks after an operation has occurred.

You can visit the [Mongoose documentation on middleware](https://mongoosejs.com/docs/middleware.html) for more information.

## Implementing middleware

Now that you have an overview of middleware in Mongoose, let's implement an example. We'll be working in `models/todo.js`. Our goal is to add a `pre save` middleware function. This middleware will run right before a new `todo` document is saved to the database. It will *normalize* the `string` value assigned to the `text` property.

> 📚 The term *normalize* refers to the process of systematically transforming text data into a consistent format in the database.
>

Update `models/todo.js` with the following:

```javascript
// models/todo.js
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  text: String,
  isComplete: Boolean
});

todoSchema.pre('save', function (next) {
  const docToBeSaved = this
  if (docToBeSaved.text) {
    docToBeSaved.text = docToBeSaved.text[0].toUpperCase() + docToBeSaved.text.slice(1);
  }
  next();
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
```

The above middleware function uses the `pre` function, and gets called before a `todo` document is saved. If the new `todo` has a `text` property, the first character of that `string` will be capitalized. After the condition, we call upon the *`next()`* function so that the flow of middleware may continue.

> 📚 In the context of Mongoose middleware, *`next()`* is a function passed into middleware like `pre` and `post`. It signals when a middleware function has completed its task, allowing Mongoose to continue to the next piece of middleware or proceed with the database operation.
>

## Running our middleware

Let's run our new middleware function. To do so, we'll need to make use of the `createTodo()` function in `queries.js`. 

Modify the `todoData` so that the first character of the `text` is lower case:

```javascript
const createTodo = async () => {
  const todoData = {
    // Update this line:
    text: "learn React",
    isComplete: false,
  };

  const todo = await Todo.create(todoData);
  console.log("New todo:", todo);
};
```

Make sure you are calling upon `createTodo` within the `runQueries` function:

```javascript
// queries.js
const runQueries = async () => {
  console.log('Queries running.');
  await createTodo();
};
```

> 🚨 If you haven't done so already, be sure to remove or comment out any previous methods being called upon. 

Next, start your server with the following command:

To test out our new middleware, run the `queries.js` file with the following command:

```bash
node queries.js
```

Check your terminal for the following output:

```plaintext
New todo: {
  text: 'Learn React',
  isComplete: false,
  _id: new ObjectId('657b25adc8146427465857d7'),
  __v: 0
}
```