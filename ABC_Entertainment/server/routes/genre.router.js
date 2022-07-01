const express = require("express");
const GenreRouter = express.Router();

const {
  GetAllGenre,
  CreateGenare,
} = require("../controllers/genre.controller");

GenreRouter.get("/", GetAllGenre);
GenreRouter.post("/", CreateGenare);

module.exports = GenreRouter;
