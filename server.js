
// var models_path = __dirname + '/models'
// fs.readdirSync(models_path).forEach(function (file) {
//   require(models_path+'/'+file)
// })
// https://stackoverflow.com/questions/14118492/node-js-mongodb-express-mongoose-how-to-require-all-the-models-in-a-parti

// app.use(express.urlencoded({ extended: true }));   //allows use of nested objects, pretty important for mongodb
// app.use(express.json());  //part of bodyparser, allows middleware to parse json. Both this and line above needed for data manipulating methods such as POST
// app.use(express.static("public"));  // allows linking static files from public instead of root directory


//27017
/*  WARNING!!
(node:3580) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the 
MongoClient constructor.
App running on port 8080!
*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
lets try this again
*/
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const db = require("./models"); // this uses index.js in models folder.
//I mostly kept this in here so I dont have to google it next time I build an app that uses multiple models

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { 
  useNewUrlParser: true,
  useFindAndModify: false
});



// ROUTES
require("./routes/api-routes.js")(app);  //WIP
require("./routes/html-routes.js")(app);//working








//OLD, not needed for mongoose?

// const databaseUrl = "workout";
// const collections = ["work"];
// collections = ?
// const db = mongojs(databaseUrl, collections);

// app.use(logger("dev"));      //why not use this?
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());         // why not use this?
// app.use(express.static("public"));

// db.on("error", error => {
//     console.log("Database Error:", error);
//   });






//add a default route
// here


// END ROUTES

// LISTENER
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



//npm run seed... look into this