const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // https://mongoosejs.com/docs/schematypes.html#numbers

    /*
what data is needed?
...not seeing anything useful in API, or index.js
CHECK SEEDS
    day: new Date().setDate(new Date().getDate()-2),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-1),
    exercises: [
      {
        type: "resistance",
        name: "Bench",
        duration: 30,
        distance: 2
        //this is set up like it should be cardio
      }
    ]
  }
******* type:resistance= Bench, Military Press, Bench Press, Quad Press, 
Push Press, Lateral Pull, Bicep Curl, 
**** type: cario= Running, 
workouts have exercises within them?
and different days?

~~~
{type: "resistance", name: "Gormleikr", weight: 2, sets: 2, reps: 1, …}
duration: 3
name: "Gormleikr" //should be an exercise
reps: 1
sets: 2
type: "resistance"
weight: 2
__proto__: Object
**This is what gets passed in as data in order to create a new exercise
I'm not sure about the difference between add and complete yet...
...also need to figure out if I have to do the drop down bars on the html page 
- and if not, hwo they were set up cause I wanna know that
NOTE that date is not passed in... except in seeds.
...perhaps created at is date...
~~~

Are exersises part of a workout?
looks like API calls something an saves a "workout" in the frontend
*/

  // exercise: {
  //   type: String,
  //   trim: true,
  //   required: "Username is Required"
  // },

 

  name: {
    type: String,
    trim: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
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
    // validate: [({ length }) => length >= 6, "Password should be longer."]
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
  
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;