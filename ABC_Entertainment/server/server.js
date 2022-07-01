const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: ".env" });

const { dbConnect } = require("./utils/dbConnect");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//@import Routers
const AlbumRouter = require("./routes/album.router");
const GenreRouter = require("./routes/genre.router");

app.use("/api/album", AlbumRouter);
app.use("/api/genre", GenreRouter);

//Execute Databse Connection
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
