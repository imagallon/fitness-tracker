const mongoose = require('mongoose');

const { Schema } = mongoose;

const Workout = new Schema({
  day: {
    type: Date,
    default:Date.now()
    
  },

  exercises: [
    {
      type: Schema.Types.ObjectId,
 
  ],
});

const Library = mongoose.model('Library', LibrarySchema);

module.exports = Workout;
