# ![Intro to Mongoose - Models](./assets/hero.png)

**Learning objective:** By the end of this lesson, students will be able to tktk
Define/understand/export a model


mkdir models
touch models/fruit.js


While this application may not have multiple models, it's still a good idea to create a directory called models that will store all Mongoose models used in the application. Let's go ahead and create the directory, along with a fruit.js file inside of it:
We will always have a single file per Mongoose model where we:

Define the schema
Compile the schema into a model
Export that model
We will always name models and model files singularly. For example, fruit.js instead of fruits.js. This is because a single file will always export just one model.

Register the model
Once we've defined our schema, we can then tell mongoose to create a collection in mongodb and validate that collection's data using the schema. We do this using the mongoose.model method:

// models/fruit.js

const Fruit = mongoose.model('Fruit', fruitSchema);
It is a standard convention to use a capital letter to start off database models, so be sure your model is named Fruit and not fruit.

Import the model into the server.js file
We'll need that model in many of the routes we define in server.js, so let's add an import statement to server.js. Since we need our application to be connected to our MongoDB instance before connecting our model, this code should be placed directly after the mongoose connection code, like so:

// server.js

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

// NEW LINE OF CODE REQUIRING THE MODEL HERE
const Fruit = require('./models/fruit.js');
And that's it! Our model is set up and ready to be used in the request handling functions defined in our express routes.