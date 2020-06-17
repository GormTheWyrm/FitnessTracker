//dependencies
var path = require("path");
const workouts = require("../models/workout.js");
// const { Workout } = require("../models/index.js");


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
    //   workouts.findOneAndUpdate({_id: myId}, {$push: {exercises: myData}})
    //   .then(workres => {
    //     res.json(workres);
    //      console.log("...");
    //   })
    //   .catch(err => {
    //     res.json(err);
    //   });  

    // }
    // );

/*
    workouts.findOneAndUpdate({ _id: myId }, { $push: { exercises: myData } })
      .then(workres => {
        //I want to update totalDuration
        workouts.find({ _id: myId })
          .then(function (myvar) {
            console.log(myvar[0].exercises[0]);
            totalDur = myvar[0].totalDuration;
            let durArray = myvar[0].exercises;
            console.log(durArray);
            //set it to 0 , then run for loop
            for (i = 0; i < durArray.length - 1; i++) {
              totalDur = totalDur + durArray[i];
            }
            workouts.findOneAndUpdate({ _id: myId }, { totalDuration: totalDur })
            //this would be easier as a prototype method-
            // if I could figure out how to define a existing workout document
            // to call the method on
            //NOT WORKING- totalDuration is not showing up in robo 3T

          })
          .catch(err1 => {
            res.json(err1);
          });


        res.json("workout updated");
      })
      .catch(err2 => {
        res.json(err2);
      });
      */

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