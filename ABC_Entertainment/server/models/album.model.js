const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Artist: {
    type: String,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
  ReleaseDate: {
    type: String,
    required: true,
  },
});

const Album = mongoose.model("Album", AlbumSchema);
module.exports = Album;
