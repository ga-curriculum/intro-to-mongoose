<h1>
  <span class="headline">Intro to Mongoose</span>
  <span class="subhead">Reading with a Model</span>
</h1>

**Learning objective:** By the end of this lesson, students will understand how to read documents from MongoDB using the `find()`, `findById()`, and `findOne()` methods in Mongoose.

Mongoose offers several methods for retrieving documents from a MongoDB database. Depending on the requirement, you can fetch a single document, multiple documents, or documents that match certain criteria.

## The `find()` method

The `find()` method is used to retrieve all documents (or all documents that meet certain criteria) from a collection.

Let's take a look at an example:

```javascript
const todos = await Todo.find({});
```

The `find()` method accepts a query object and returns an **array** of documents from the relevant collection. The query object can outline the search criteria for the documents we wish to return. An empty object (`{}`) indicates that there are no search criteria, and all documents in the `Todo` collection should be retrieved.

> 💡 The `find()` method will always return an array, even if the array only includes a single result.

## The `findById()` method

The `findById()` method is used to fetch a **single document** based on its unique `_id`.

Let's take a look at an example:

```javascript
const id = "657743d4c3b284c0ef6fd001";
const todo = await Todo.findById(id);
```

The `findById` method accepts an `ObjectId` and retrieves the document with that unique identifier from the collection. If a `string` value is passed in, Mongoose will automatically convert it into a MongoDB `ObjectId`.

## The `findOne()` method

The `findOne()` method is useful for finding the **first document** that matches the given criteria.

Let's take a look at an example:

```javascript
const todo = await Todo.findOne({ text: "Learn JS" });
```

The `findOne()` method accepts a query object that specifies the criteria by which to find the document. In the example above, the method will return the first `Todo` document with a `text` value of `Learn JS`.

## Reading many todos

Let's test some of these examples in our `queries.js` file.

### Build the `findTodos` function

First let's build out a function that retrieves a list of `todos`:

```javascript
// queries.js

const findTodos = async () => {
  const todos = await Todo.find({});
  console.log("All todos:", todos);
};
```

Next, we'll call `findTodos` within the `runQueries` function:

```javascript
// queries.js

const runQueries = async () => {
  console.log("Queries running.");
  await findTodos();
};
```

> If you haven't done so already, be sure to remove or comment out `createTodo()` from our last example

## Run the `findTodos` function

To execute the `findTodos` function, run the `queries.js` file with the following command:

```bash
node queries.js
```

Check your terminal for the following output:

```plaintext
All todos: [
  {
    _id: new ObjectId('6573745144784f6dc034e1df'),
    text: 'Learn JS',
    isComplete: false,
    __v: 0
  },
  {
    _id: new ObjectId('6573745bfb58313f9376efe5'),
    text: 'Learn HTML',
    isComplete: false,
    __v: 0
  },
  {
    _id: new ObjectId('6573746529759ca5e8f2779b'),
    text: 'Learn CSS',
    isComplete: false,
    __v: 0
  }
]
```
