# ![Intro to Mongoose - Schemas and Models](./assets/hero.png)

**Learning objective:** By the end of this lesson, students will understand the role of schemas and models in Mongoose.

## Mongoose schemas

In Mongoose, a schema is a blueprint for defining the structure, data types, default values, and validation rules for documents within a MongoDB collection. Mongoose schemas are used to enforce consistency and data validation when interacting with the database, ensuring that documents adhere to a specific structure and contain valid data.

A schema in Mongoose is a regular JavaScript object. The keys represent the properties of the data, while the values define data types and any constraints.

Take a look at the Mongoose schema example below:

```javascript
const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  text: String,
  isComplete: Boolean,
  priorityLevel: Number,
});
```

In this example, we define a `todoSchema` with three properties. Each property is assigned a specific data type, like `String`, `Boolean`, or `Number`. These values are known as [`schemaTypes`](https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype), special configuration objects that Mongoose uses to specify the data type of a property.

Mongoose provides eight built-in `schemaTypes`:

- `String`
- `Number`
- `Boolean`
- `Date`
- `[]` (Array)
- `mongoose.Schema.Types.ObjectId`
- `mongoose.Schema.Types.Buffer`
- `mongoose.Schema.Types.Mixed`

> 💡 Note that the last three types are specific to Mongoose, not standard JavaScript types.
>

## Mongoose models

In Mongoose, a schema can be compiled into a model. A model acts as the primary interface for database operations through a variety of inbuilt methods. It uses the schema to ensure that new data conforms to a predefined structure. 

To clarify the relationship between a schema and a model, consider this analogy: a schema is like a cooking recipe, detailing the ingredients and the steps needed. The model acts as the kitchen, with the staff and tools necessary to handle the recipe. The kitchen staff can create food by following the recipe, but also modify it (update data), serve it (retrieve data), or even discard it (delete data) as needed. In this process, the resulting dish is the document in our MongoDB database.

To create a model and validate data against a schema, we use the [*`mongoose.model`*](https://mongoosejs.com/docs/models.html#compiling) method. Once compiled, models are typically exported from the file in which they are defined, allowing them to be used throughout the codebase.

```javascript
// Compile the schema into a model:
const Todo = mongoose.model('Todo', todoSchema);

// Export the model:
export { Todo };
```

> 📚 The *`mongoose.model`* accepts a singular name string and a schema as arguments, and returns a model. By default, Mongoose automatically names the corresponding MongoDB collection by pluralizing and converting the string to all lowercase.
>