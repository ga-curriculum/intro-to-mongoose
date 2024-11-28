<h1>
  <span class="headline">Intro to Mongoose</span>
  <span class="subhead">Query Options</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to use Mongoose's query manipulation methods to refine database operations in MongoDB.

Mongoose offers a variety of options for manipulating database queries. When you call upon a method like `find()`, it returns an instance of a [Query](https://mongoosejs.com/docs/api/query.html#Query()). You can then chain built-in query methods, such as `limit()`, `sort()`, or `skip()`, to refine the query's results.

Below is a list of some common methods for augmenting queries:

1. **`sort()`**: This option specifies the order in which documents are returned. You can sort a collection of documents by any field, in ascending or descending order.
   ```javascript
   const todos = await Todo.find({ }).sort({ text: 'asc' })
   ```

2. **`limit()`**: This limits the number of documents returned by the operation, which is useful for pagination or reducing server load.
   ```javascript
   const todos = await Todo.find({ }).limit(10)
   ```

3. **`skip()`**: Used alongside `limit()` for pagination, the `skip()` method determines the number of documents to skip before starting to return results. In the example below, only documents after the first `10` results will be included in what is returned.
   ```javascript
   const todos = await Todo.find({ }).skip(10)
   ```

4. **`select()`**: This option specifies which fields to include or exclude in the documents that are returned. It can help reduce the amount of data we need to send over networks.
   ```javascript
   const todos = await Todo.find({ }).select('text')
   ```

All of these options can be combined to create precise queries, tailored to a specific need in your application:

```javascript
const todos = await Todo.find({ }).skip(10).limit(5).select('text')
```

Visit the [Mongoose Docs](https://mongoosejs.com/docs/api/query.html) for more information and a full list of available query methods.