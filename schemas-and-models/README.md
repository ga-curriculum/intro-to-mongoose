<h1>
  <span class="headline">Intro to Mongoose</span>
  <span class="subhead">Schemas and Models</span>
</h1>

**Learning objective:** By the end of this lesson, students will understand how to structure data using Mongoose schemas, compile these schemas into models, and utilize these models to perform CRUD operations in a MongoDB database.

## Mongoose schemas

Mongoose schemas are like instruction manuals that tell MongoDB how to organize and store your data. When you use Mongoose with MongoDB, a schema is your way of describing what each piece of data should look like.

A schema in Mongoose is a regular JavaScript object. The values next to each key tell MongoDB what type of data to expect (like text or numbers) and any special rules (like if a field must always have data).

Take a look at the Mongoose schema example below:

```javascript
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});
```

In this example, we define a `todoSchema` with two properties. Each property is assigned a specific data type, like `String`, `Boolean`, or `Number`. These values are known as [`schemaTypes`](https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype), special configuration objects that Mongoose uses to specify the data type of a property.

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

> In JavaScript, the *new* keyword is used before a Mongoose schema to create an instance of that schema. This process constructs a new schema object, applying the structure and rules defined in the schema blueprint to the data that will be stored in the database. Schema is a class provided by Mongoose, with all of the prebuilt options for what data *could* look like. 

## Mongoose models

After establishing a schema with Mongoose, the next step is to compile this schema into a model. The model in Mongoose is akin to an interactive interface, bringing the schema's blueprint to life. It's the practical tool we use to interact with the database for various operations.

- Models are essential for performing database operations like creating, reading, updating, and deleting (CRUD) records. They provide an array of built-in methods for these tasks.

- The model ensures that any new data introduced to the database conforms to the predefined structure laid out by the schema. This keeps your data consistent and reliable.

To better understand the relationship between a schema and a model, let's use an analogy. Imagine the schema as a detailed architectural blueprint for a house, outlining its structure, the types of materials to be used, and specific design elements. The model, in this context, is like the construction team equipped with tools and knowledge to build the house. They follow the blueprint to construct the house (creating and manipulating documents in the database), ensuring everything is as per the design (schema). Just as a construction team can modify parts of the house or even demolish it, the model can update or delete data in the database, all while adhering to the blueprint's guidelines.

 To compile a schema into a model, we use the [*`mongoose.model`*](https://mongoosejs.com/docs/models.html#compiling) method. This method takes two primary arguments:

- A string that specifies the singular version of the model's name.
- The schema to be compiled into a model.

For example:

```javascript
// Compile the schema into a model:
const Todo = mongoose.model('Todo', todoSchema);

// Export the model:
module.exports = Todo;
```

> When you create a model, Mongoose automatically translates the model's name into the corresponding MongoDB collection name. It pluralizes the name and converts it to lowercase. For instance, a model named 'Todo' would correspond to a collection named 'todos' in MongoDB.