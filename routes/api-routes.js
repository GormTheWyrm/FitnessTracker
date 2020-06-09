//dependencies
var path = require("path");   //do I need this?

module.exports = function(app) {
//  /api/workouts
//need post, put and get
//  /api/workouts/range
//  gets workouts within range... what is range?

app.get("/api/test", (req, res) => {
  res.json("test");
}
);
  app.get("/api/workouts", (req, res) => {
    res.json("test");
    //workout.functions...
  }
  );

  app.post("/api/workouts", (req, res) => {

    // do database stuff here
    let myData = "not implemented";
    res.json(myData);
    console.log(myData);
    //res.json v res.send?
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





  };