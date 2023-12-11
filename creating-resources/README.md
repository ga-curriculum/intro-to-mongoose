# ![Intro to Mongoose - Creating Resources](./assets/hero.png)

**Learning objective:** By the end of this lesson, students will be able to add new documents to a MongoDB database using the `create()` method.

## The `create()` method

Mongoose models provide various methods to perform CRUD (Create, Read, Update, Delete) operations. These methods facilitate interactions with the database, allowing for the creation, retrieval, modification, and deletion of resources.
 
A model's [`create()`](https://mongoosejs.com/docs/api/model.html#Model.create()) method is used for adding new documents to the database. It's an asynchronous function that takes an object as an argument and returns the newly created document upon successful execution.

> 🚨 For the `create()` method to execute successfully, the input object must adhere to the structure defined by the model's schema. If the object does not match the schema, Mongoose will respond with an error.
>

Let's take a look at the anatomy of the `create()` method:

tktk Hunter replace with graphic:
```javascript
const todo = await Todo.create({ text: "Learn JS", isComplete: false });
```

1. **Document Returned**: The newly created document based on the schema.
2. **Model**: The Mongoose model (`Todo`) used for the operation.
3. **Model Method**: The `create()` method of the model.
4. **Object Argument**: The data used to create the new document.

## Creating a new todo

For this demonstration, we'll work within `server.js`. Our setup will be differ slightly from a typical Express app in order to focus on Mongoose.

### Getting started

In `server.js`, import the `Todo` model:

```javascript
// server.js
const Todo = require('./models/todo.js');
```

Next, set up the following route:

```javascript
// server.js
app.get('/run-queries', async (req, res) => {
  res.send('Check your VS Code terminal.');
});
```

This route will be used to trigger the various model method's we wish to demonstrate. When accessed, it displays a message prompting us to check the VS Code terminal, where the results of the executed queries will be shown.

### Building the `createTodo` function

Let's build out a function to handle the creation of our new todo:

```javascript
// server.js
const createTodo = async () => {
  // Note: Data will typically arrive on the server via the `request` object:
  const todoData = { text: 'Learn JS', isComplete: false };
  const todo = await Todo.create(todoData);
  console.log('New todo:', todo);
};
```

In the `createTodo` function, we first define an object called `todoData`. It contains the the details for our new todo. We then use the `Todo` model's `create()` method to add this data as a document in the database. If the operation succeeds, the function outputs the newly created `todo` to the console.

Next, call upon the function within the `run-queries` route:

```javascript
// server.js
app.get('/run-queries', async (req, res) => {
  // Call upon the function:
  await createTodo();
  res.send('Check your VS Code terminal.');
});
```

## Running the `createTodo` function

To run the `createTodo` function, start your server with the following command:

```bash
nodemon
```

In your browser, navigate to `/run-queries`:

```plaintext
http://localhost:3000/run-queries
```

Check your terminal for the following output:

```plaintext
New todo: {
  text: 'Learn JS',
  isComplete: false,
  _id: new ObjectId('65777e33f4a45a8462ae3054'),
  __v: 0
}
```

This output shows the newly created `todo` document. It includes the properties we specified, along with an automatically generated `_id` (a unique identifier assigned by MongoDB) and `__v` (a version key used to track how many updates have been made to the document).

To add more todos, modify the `todoData` in `createTodo` and refresh the browser. Each refresh triggers a request to `/run-queries`, executing the `createTodo` function again.