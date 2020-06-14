const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
// I think exercises needs to be not a new model... because the front end tries to update it with a put


});

const Workout = mongoose.model("Workout", WorkoutSchema);
//this actually connects...

module.exports = Workout;


//https://mongoosejs.com/docs/schematypes.html
// learn schema types



