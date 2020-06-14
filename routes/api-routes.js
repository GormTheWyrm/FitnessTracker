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
        console.log(dbRes);
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
      .then(workres => {
        res.json(workres);
      })
      .catch(err => {
        res.json(err);
      });

    /*

app.post("/submit", ({ body }, res) => {
  const user = new User(body);
  user.coolifier();
  user.makeCool();

  User.create(user)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});


     db.Book.create(body)
    .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
    
    */



  }
  );
  app.put("/api/workouts", (req, res) => {  // FIX ME
    //get id from database
    //
    workouts.find()
    


    // do database stuff here
    let myData = "not implemented";
    res.json(myData);
    console.log(myData);
    //res.json v res.send?
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