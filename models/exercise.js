const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({

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



});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;