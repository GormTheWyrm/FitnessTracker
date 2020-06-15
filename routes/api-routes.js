//dependencies
var path = require("path");   //do I need this?
// const { db } = require("../models/workout");
const workouts = require("../models/workout.js");
const { Workout } = require("../models/index.js");


module.exports = function (app) {

  app.get("/api/test", (req, res) => {
    res.json("test");
  } //this is a test
  );



  // db.exercises.insert({
  //   type: "resistance",
  //   name: "Bicep Curl",
  //   duration: 20,
  //   weight: 100,
  //   reps: 10,
  //   sets: 4
  //   })
  //this worked in mongodb, created an exersize...


  app.get("/api/workouts", (req, res) => {  // works, may need refinement...
    workouts.find()
      .then(dbRes => {
        // console.log(dbRes);
        res.json(dbRes);
      })
      .catch(err => {
        res.json(err);
      });
  }
  );
  // workout.js will grab the last object from this... so it should be an array...

  app.post("/api/workouts", (req, res) => { // probably works!, may need fixin
    // console.log(req.body);
    //Workout.create(...data...)
    const work = new Workout(req.body);
    //check if body is good data...
    workouts.create(work)
      //could be empty...
      .then(workres => {
        res.json(workres);
      })
      .catch(err => {
        res.json(err);
      });





  }
  );
  app.put("/api/workouts/:id", (req, res) => {  // FIX ME
    //get id from req
    //     console.log(req.params);
    // let myId = '"'+ req.params.id + '"';
    let myId = req.params.id;
    let myData = req.body;

    workouts.findOneAndUpdate({_id: myId}, {$set: {exercises: myData}}).then(
      console.log("...")
    );
      //need to figure out how to add an exercise...
    
      //currently adding an id... and  overwriting exercises...

  }
  );

  app.get("/api/workouts/range", (req, res) => {
    res.json("test");
    //workout.functions...
    // get...
  }
  );
  // next step; investigate models, pull up example code.
  //figure out how to seed...
  //make api-routes work





  /*
  router.post("/api/transaction", ({ body }, res) => {
    Transaction.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/transaction/bulk", ({ body }, res) => {
    Transaction.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/transaction", (req, res) => {
    Transaction.find({})
      .sort({ date: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  */

  //will need a delete?
  // ^^^
  //app.delete("/api/workouts/:id", req, res)
  //workouts.findByIdAndDelete(body.id)

};