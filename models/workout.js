const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      // type: Schema.Types.ObjectId,
      // ref: "Exercise"
      name: {
        type: String,
        trim: true
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      type: {
        type: String,
        trim: true
        // should be "resistance" or "cardio"
      },
      weight: {
        type: String,
        unique: true

      },
      distance: { //cardio
        type: Number

      },
      duration: { //cardio
        type: Number
      }
    }
  ]
,
    //totalDuration 
    totalDuration: {
      type: Number,
      default: 0
    }
  // I think exercises needs to be not a new model... because the front end tries to update it with a put
});
//fill in total duraction here?
  // WorkoutSchema.methods.addDuration = function() {
  //   this.totalDuration = this.totalDuration + this.exercise[exercise.length - 1].duration;
  //   return this.totalDuration;
  // };
  //look up virtuals... mongoose.virtual
  //this might have been easier if I used a second model...
const Workout = mongoose.model("Workout", WorkoutSchema);
//this actually connects...
module.exports = Workout;
//https://mongoosejs.com/docs/schematypes.html
// learn schema types



