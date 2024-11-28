<h1>
  <span class="headline">Intro to Mongoose</span>
  <span class="subhead">Updating with a Model</span>
</h1>

**Learning objective:** By the end of this lesson, students will understand how to update resources in a MongoDB database the `save()` and `findByIdAndUpdate()` methods in Mongoose.

Updating a document involves modifying its existing data while maintaining data integrity. Mongoose provides several methods for updating documents, each suitable for different scenarios.

## Updating retrieved documents

One common approach to updating a document is to first retrieve the document, and then apply the necessary changes. This can be useful when you need to check the authorship of a resource before performing an operation. 

The approach involves two steps:

1. **Retrieve the document**: Use the `findById()` method to fetch the document you want to update.
2. **Apply the changes and save**: Modify the document's properties as needed and then save the changes using the `save()` method.

Let's take a look at an example:

```javascript
const id = '6573745144784f6dc034e1df';
const todo = await Todo.findById(id);
todo.isComplete = true;
await todo.save();
```

After retrieving the `todo` document, we update the `isComplete` property in the same way we would modify any regular JavaScript object property. Once this modification is made, the *`save()`* method is called on the `todo` instance to persist the changes to the database.

> 📚 The *`save()`* method is available on a Mongoose document instance (a retrieved document). When called on a document instance, it either inserts or updates the document in the database.


## Simultaneous retrieval and update

Another approach to updating documents is using the `findByIdAndUpdate()` method. This method allows you to find a document by its `_id` and update it. It has the advantage of completing an update with a single operation.

The `findByIdAndUpdate()` method accepts 3 arguments and returns a single document:

1. **`ObjectId`**: The unique identifier (`_id`) of the document you want to update.
2. **Update object**: An object that specifies the changes to apply to the document. 
3. **Options object**: An optional object used to specify various settings for the operation.

Let's take a look at an example:

```javascript
const id = '6573745144784f6dc034e1df';
const updatedTodo = await Todo.findByIdAndUpdate(
  id,
  { isComplete: true },
  { new: true }
);
```

In this example, we are finding a specific document with the value of the `id` variable. The second argument is our **update object**, which sets the document's `isComplete` property to `true`. The third argument is an *options object* `{ new: true }`, specifying that the modified document should be returned, not the original. 

## Implementing `findByIdAndUpdate()`

Let's test some of these examples in our `queries.js` file.

### Build an `updateTodo` function

First let's build out a function for updating our todo:

```javascript
// queries.js

const updateTodo = async () => {
  const id = '6573745144784f6dc034e1df';
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { isComplete: true },
    { new: true }
  );
  console.log("Updated todo:", updatedTodo);
};
```

Next, we'll call `updateTodo` within the `runQueries` function:

```javascript
// queries.js

const runQueries = async () => {
  console.log('Queries running.');
  await updateTodo();
};
```

> If you haven't done so already, be sure to remove or comment out any previous methods being called here

## Run the `updateTodo` function

To execute the `updateTodo` function, run the `queries.js` file with the following command:

```bash
node queries.js
```

Check your terminal for the following output:

```plaintext
Updated todo: {
  _id: new ObjectId('6573745144784f6dc034e1df'),
  text: 'Learn JS',
  isComplete: true,
  __v: 0
}
```