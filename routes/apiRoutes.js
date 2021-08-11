const path = require("path");
const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", async (req, res) => {
  try {
    const workoutData = await Workout.find();
    console.log(workoutData[0].exercises);
    res.json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try {
    const workoutData = await Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    });
    res.json(workoutData);
  } catch (err) {
    res.json(err);
  }
});

router.post("/api/workouts", async (req, res) => {
  try {
    const workoutData = await Workout.create(req.body);
    res.json(workoutData);
  } catch (err) {
    res.json(err);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    const workoutData = await Workout.find();
    res.json(workoutData);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
