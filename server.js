
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const path = require("path");
const PORT = process.env.PORT || 8080;



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



// END ROUTES

// LISTENER
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

