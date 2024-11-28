<h1>
  <span class="headline">Intro to Mongoose</span>
  <span class="subhead">Deleting with a Model</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to delete documents from a MongoDB database using `deleteOne()` and `findByIdAndDelete()` in Mongoose.

## Deleting documents

Delete operations permanently remove a record from a database. Mongoose provides several methods for deleting documents, either individually or in bulk.

## Deleting retrieved documents

One approach is to first retrieve the document, and then remove it from the database using the document instance. This can be useful when you need to check the authorship of a resource before performing a delete operation. 

The approach involves two steps:

1. **Retrieve the document**: Use the `findById()` method to fetch the document you want to delete.
2. **Call upon the `deleteOne()` method**: Once the document is retrieved, call upon its `deleteOne()` method to delete it from the database.

Let's take a look at an example:

```javascript
const id = '6573745144784f6dc034e1df';
const todo = await Todo.findById(id);
await todo.deleteOne();
```

>  📚 The *[`deleteOne()`](https://mongoosejs.com/docs/api/model.html#Model.deleteOne())* method is available on a Mongoose document instance (a retrieved document). It removes the document from the database and returns an object with metadata on the status of the operation.

## Simultaneous retrieval and delete

A more direct approach to deletion is the `findByIdAndDelete()`. It allows you to find a document by its `_id` and delete it with a single operation.

The `findByIdAndDelete()` method accepts the unique `_id` of the document as an argument, removes that document from the database, and returns the document that was removed. If the document cannot be found, the operation will return `null`.

Let's take a look at an example:

```javascript
const id = '6573745144784f6dc034e1df';
const removedTodo= await Todo.findByIdAndDelete(id);
```

## Implementing `findByIdAndDelete()`

Let's test some of these examples in our `queries.js` file.

### Build the `deleteTodo` function

First let's build a function to delete a todo:

```javascript
// queries.js

const deleteTodo = async () => {
  const id = '6573745144784f6dc034e1df';
  const removedTodo = await Todo.findByIdAndDelete(id);
  console.log('Removed todo:', removedTodo)
}
```

Next, we'll call `deleteTodo` within the `runQueries` function:

```javascript
// queries.js

const runQueries = async () => {
  console.log('Queries running.');
  await deleteTodo();
};
```

> If you haven't done so already, be sure to remove or comment out any previous methods being called

## Run the `deleteTodo` function

To execute the `deleteTodo` function, run the `queries.js` file with the following command:

```bash
node queries.js
```

Check your terminal for the following output:

```plaintext
Removed todo: {
  _id: new ObjectId('6573745144784f6dc034e1df'),
  text: 'Learn JS',
  isComplete: true,
  __v: 0
}
```