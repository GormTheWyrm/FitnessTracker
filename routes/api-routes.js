//dependencies
var path = require("path");
const workouts = require("../models/workout.js");
const { Workout } = require("../models/index.js");


module.exports = function (app) {

  app.get("/api/workouts", (req, res) => {
    workouts.find()
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(err => {
        res.json(err);
      });
  }
  );
  app.post("/api/workouts", (req, res) => {
    // const work = new Workout(req.body);
    workouts.create({}) //got rid of work
      .then(workres => {
        res.json(workres);
      })
      .catch(err => {
        res.json(err);
      });

  }
  );
  // this works but doesnt update totalDuration
  // app.put("/api/workouts/:id", (req, res) => {  // FIX ME
  //   let myId = req.params.id;
  //   let myData = req.body;
  //   let totalDur;
  //   //testing


  app.put("/api/workouts/:id", (req, res) => {  // FIX ME
      let myId = req.params.id;
      let myData = req.body;
      workouts.findOneAndUpdate({_id: myId}, {$push: {exercises: myData}})
      .then(workres => {
        res.json(workres);
         console.log("...");
      })
      .catch(err => {
        res.json(err);
      });  

  });


  app.get("/api/workouts/range", (req, res) => {  //NEEDS TO BE FIXED
    // what range are we looking at? days? number of exercises?
    workouts.find()
      .then(rangeData => {
        // console.log(dbRes);
        res.json(rangeData);
      })
      .catch(err => {
        console.log(rangeData);
        res.json(err);
      });
  }
  );

  //I should add a function that deletes data over a certain age so that the app is easier to maintain


};