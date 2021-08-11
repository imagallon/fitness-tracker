const mongoose = require("mongoose");

const { Schema } = mongoose;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now(),
    },

    exercises: [
      {
        name: {
          type: String,
          trim: true,
          required: "exercise name required!!",
        },

        type: {
          type: String,
          trim: true,
          required: "cardio or resistance is required!!",
        },

        distance: {
          type: Number,
          trim: true,
          required: "enter distance please",
        },

        duration: {
          type: Number,
          trim: true,
          required: "enter a time for duration please",
        },

        weight: {
          type: Number,
          trim: true,
          required: "enter a weight in lbs please",
        },

        sets: {
          type: Number,
          trim: true,
          required: "how many sets did you do?",
        },

        reps: {
          type: Number,
          trim: true,
          required: "how many reps did you do?",
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
