const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lastWorkoutSchema = new Schema({
    day: {
        type: Date
    },
    exercises: [{
        type: { type: String, default: '', trim: true },
        name: { type: String, default: '', trim: true },
        duration: { type: Number, default: 1 },
        weight: { type: Number, default: 0 },
        reps: { type: Number, default: 0 },
        sets: { type: Number, default: 0 },
        distance: { type: Number, default: 0 }
    }]
});

const Workout = mongoose.model("Workout", lastWorkoutSchema);

module.exports = Workout;