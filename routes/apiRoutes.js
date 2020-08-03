const router = require("express").Router();
const Workout = require("../models/workout")

//Getting route to see a workout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    //push the creating workout into the db
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        //if error show status code
        .catch(err => {
            res.status(400).json(err);
        });
});
//Getting route to see all workouts within set range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    //brings up all the workouts in the specified range
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Route for updating a current workout in DB
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
//Route to create a new workout to DB
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
module.exports = router;