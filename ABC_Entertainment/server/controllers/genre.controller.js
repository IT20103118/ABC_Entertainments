const Genre = require("../models/genre.model");

const GetAllGenre = async (req, res) => {
  try {
    const genres = await Genre.find();
    return res.status(200).send({ success: true, genres: genres });
  } catch (e) {
    return res.status(500).send({ success: false, message: e.message });
  }
};
const CreateGenare = async (req, res) => {
  try {
    const generdata = req.body;
    const genre = await Genre.create(generdata);
    return res.status(200).send({ success: true, genre: genre });
  } catch (e) {
    return res.status(500).send({ success: false, message: e.message });
  }
};

module.exports = { GetAllGenre, CreateGenare };
