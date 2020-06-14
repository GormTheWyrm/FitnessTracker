
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const path = require("path");
const PORT = process.env.PORT || 8080;

// const db = require("./models"); // this uses index.js in models folder.
//I mostly kept this in here so I dont have to google it next time I build an app that uses multiple models
// alt s to require Workout directly
// const Workout = require("./models/workout.js")
// const workouts = require("./models/workout.js");
//do I even need these in this file?

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useFindAndModify: false
});



// ROUTES
require("./routes/api-routes.js")(app);  //WIP
require("./routes/html-routes.js")(app);//working
// const apiRoutes = require("./routes/api-routes.js");
// const htmlRoutes = require("./routes/html-routes.js");







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





// END ROUTES

// LISTENER
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



//npm run seed... look into this


//NOTES

/*
DO I need to create a user for mongoose/mongo to work?
Do I need to create a collection outside of app?
...how do collections work... watching tutorial now...
...

I need to ask about how to set up the connection and models...
I don't understand how the db.xxx.yyy works
- what makes that connection,
- is server.js db the same as mongo db?

IF YOU CAN HELP ME GET MY SEED WORKING, THEN I SHOULD BE ABLE TO MANIPULATE DATA
...BUT WITHOUR DATA i AM LOST
...I should also ask about how to do this in mongodb...
*/