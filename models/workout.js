const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // https://mongoosejs.com/docs/schematypes.html#numbers

  
  name: {
    type: String,
    trim: true,

  },
  reps: {
    type: Number
  },
  sets: {
    type: Number
  },
  type: {
    type: String,
    trim: true,
    // should be "resistance" or "cardio"
  },
  weight: {
    type: String,
    unique: true,

  },
  distance: { //cardio
    type: Number,

  },
  duration: { //cardio
    type: Number
  },


  timeCreated: {
    type: Date,
    default: Date.now
  }
  //will need some functions to create validations and deal with dropdowns...

// name: String,
// reps: String,
// sets: String,
// type: String,
// wieght: String,
// distance: String,
// duration: String,

//I probably need a way to keep this data from filling up irrevelent parts...
// perhaps I need a null = false validation?
//https://mongoosejs.com/docs/validation.html
//are comments causing the problems?

//trim: true; are those legit?

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;