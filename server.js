const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 8080;

//define model here!
const Workout = require("./models/workout.js");
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));   //allows use of nested objects, pretty important for mongodb
app.use(express.json());  //part of bodyparser, allows middleware to parse json. Both this and line above needed for data manipulating methods such as POST
app.use(express.static("public"));  // allows linking static files from public instead of root directory

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
//27017
/*  WARNING!!
(node:3580) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the 
MongoClient constructor.
App running on port 8080!
*/

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});





// index route is working... without being defined anywere...?

// router
// do I need to create a router?
// require("./routes/api-routes.js")(app);  //working
require("./routes/html-routes.js")(app);
// app.use(require("./routes/api-routes.js"));

// app.get("/", (req, res) => {
  // res.send("test")
  //wait, why is this working?
// }
// );
// ROUTES
//  /api/workouts
//need post, put and get
//  /api/workouts/range
//  gets workouts within range... what is range?

//  home page should be index and it will call api/workouts
//need html route /stats
//need html route /exercise





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