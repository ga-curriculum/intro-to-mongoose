# ![Intro to Mongoose - Reading Resources](./assets/hero.png)

**Learning objective:** By the end of this lesson, students will be able to tktk

tktk mongoose has a lot of methods for reading resources. sometimes you get a bunch, sometimes you find a specific document.

## The `find()` method

The `find()` method...

useful when...

Let's take a look at the anatomy of the `findOne` method:

tktk Hunter replace with graphic:
```javascript
const todos = await Todo.find({ });
```

1. **Code Element**: Synopsis

## The `findById()` method

The `findById()` method...

useful when...

Let's take a look at the anatomy of the `findOne` method:

tktk Hunter replace with graphic:
```javascript
const todo = await Todo.findById(id);
```

1. **Code Element**: Synopsis

## The `findOne()` method

The `findOne()` method...

useful when...

Let's take a look at the anatomy of the `findOne` method:

tktk Hunter replace with graphic:
```javascript
const todo = await Todo.findOne({ text: 'Learn JS' });
```

1. **Code Element**: Synopsis

## Reading todos

For this demonstration, we'll work within `server.js`. 

### Building the `findTodos` function

Let's build out a function to handle retrieving a list of todos:

```javascript
// server.js
const findTodos = async () => {
  const todos = await Todo.find({});
  console.log("All todos:", todos);
};
```

Next, call upon the function within the `run-queries` route:

```javascript
// server.js
app.get('/run-queries', async (req, res) => {
  // Call upon the function:
  await findTodos()
  res.send('Check your VS Code terminal.');
});
```

> 🚨 If you haven't done so already, be sure to remove or comment out the invocation of `createTodo()`. 

## Running the `findTodos` function

To run the `findTodos` function, start your server with the following command:

```bash
nodemon
```

In your browser, navigate to `/run-queries`:

```plaintext
http://localhost:3000/run-queries
```

Check your terminal for the following output:

```plaintext
All todos: [
  {
    _id: new ObjectId('6573745144784f6dc034e1df'),
    text: 'Learn JS',
    isComplete: false,
    priorityLevel: 5,
    __v: 0
  },
  {
    _id: new ObjectId('6573745bfb58313f9376efe5'),
    text: 'Learn HTML',
    isComplete: false,
    priorityLevel: 4,
    __v: 0
  },
  {
    _id: new ObjectId('6573746529759ca5e8f2779b'),
    text: 'Learn CSS',
    isComplete: false,
    priorityLevel: 3,
    __v: 0
  }
]
```

This output shows...