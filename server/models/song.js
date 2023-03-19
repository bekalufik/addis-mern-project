const mongoose = require("mongoose");

// define song schema and model
const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
});

module.exports =mongoose.model("Song", songSchema);