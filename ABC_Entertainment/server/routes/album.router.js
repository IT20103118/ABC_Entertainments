const express = require("express");
const AlbumRouter = express.Router();

const {
  CreateAlbum,
  GetAllAlbums,
  GetUniqeAlbum,
  DeleteUniqeAlbum,
  UpdateAlbum,
} = require("../controllers/album.controller");

AlbumRouter.post("/", CreateAlbum);
AlbumRouter.get("/", GetAllAlbums);
AlbumRouter.get("/:id", GetUniqeAlbum);
AlbumRouter.delete("/:id", DeleteUniqeAlbum);
AlbumRouter.patch("/:id", UpdateAlbum);

module.exports = AlbumRouter;
