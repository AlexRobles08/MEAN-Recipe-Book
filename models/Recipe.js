const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"]
  },
  slug: String,
  description: {
    type: String,
    maxlength: [500, "Description can not be more than 500 characters"]
  },
  serves: {
    type: String
  },
  categories: {
    // Array of strings
    type: [String]
  },
  prep: { hours: { type: Number }, minutes: { type: Number } },
  cook: { hours: { type: Number }, minutes: { type: Number } },
  readyIn: { hours: { type: Number }, minutes: { type: Number } },
  notes: {
    type: String,
    maxlength: [1000, "Notes can not be more than 500 characters"]
  },
  directions: {
    // Array of strings
    type: [String]
  },
  source: {
    type: String
  },
  author: { type: String },
  ingredients: [
    { name: String, measurement: String, note: String, _id: false }
  ],
  rating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating must can not be more than 10"]
  },
  likes: {
    type: Number
  },
  photo: {
    type: String,
    default: "no-photo.jpg"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Recipe", RecipeSchema);
