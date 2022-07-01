const Album = require("../models/album.model");

//Create Song Albums
const CreateAlbum = async (req, res) => {
  try {
    const { Title, Artist, Genre, ReleaseDate } = req.body;

    const check = await Album.findOne({ Title });
    if (check) {
      throw new Error("Album Title Already Exist..!");
    }
    const createdAlbum = await Album.create({
      Title,
      Artist,
      Genre,
      ReleaseDate,
    });

    return res.status(200).send({ success: true, AddedAlbum: createdAlbum });
  } catch (e) {
    return res.status(500).send({ success: false, message: e.message });
  }
};

//Get All Albums
const GetAllAlbums = async (req, res) => {
  try {
    const Albums = await Album.find();
    return res.status(200).send({ success: true, Albums: Albums });
  } catch (e) {
    return res.status(500).send({ success: false, message: e.message });
  }
};

//Get unique album using id
const GetUniqeAlbum = async (req, res) => {
  try {
    const id = req.params.id;
    const UniqueAlbum = await Album.findById(id);
    return res.status(200).send({ success: true, Album: UniqueAlbum });
  } catch (e) {
    return res.status(500).send({ success: false, message: e.message });
  }
};

//Delete unique album using id
const DeleteUniqeAlbum = async (req, res) => {
  try {
    const id = req.params.id;
    const UniqueAlbum = await Album.findByIdAndDelete(id);
    return res.status(200).send({ success: true, DeletedAlbum: UniqueAlbum });
  } catch (e) {
    return res.status(500).send({ success: false, message: e.message });
  }
};

//Update album
const UpdateAlbum = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const UpdatedAlbum = await Album.findByIdAndUpdate(id, updateData);

    return res.status(200).send({ success: true, UpdatedAlbum: UpdatedAlbum });
  } catch (e) {
    return res.status(500).send({ success: false, message: e.message });
  }
};

module.exports = {
  CreateAlbum,
  GetAllAlbums,
  GetUniqeAlbum,
  DeleteUniqeAlbum,
  UpdateAlbum,
};
