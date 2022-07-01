import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./AddAlbums.scss";

const AddAlbums = () => {
  const [Title, setTitle] = useState("");
  const [Artist, setArtist] = useState("");
  const [Genre, setGenre] = useState("");
  const [ReleaseDate, setReleaseDate] = useState("");
  const [Genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/genre")
      .then((res) => {
        if (res.data.success) {
          setGenres(res.data.genres);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const albumData = {
      Title,
      Artist,
      Genre,
      ReleaseDate,
    };
    console.log(albumData);
    axios
      .post("http://localhost:8080/api/album", albumData)
      .then((res) => {
        if (res.data.success) {
          alert("Album Added.....!");
          window.location.reload();
        } else {
          alert("Album Added Fail.....!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-uploader" style={{ margin: "20px 0px" }}>
      <div class="container">
        <div class="content">
          <div class="image-box">
            <img
              src="https://res.cloudinary.com/desnqqj6a/image/upload/v1656660415/Music_festival-bro_m8bo1v.png"
              alt=""
            />
          </div>

          <form class="addAlbumForm" onSubmit={onSubmit}>
            <div class="topic">Add Album</div>
            <div class="input-box">
              <input
                type="text"
                required
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <label>Title</label>
            </div>
            <div class="input-box">
              <input
                type="text"
                required
                onChange={(e) => {
                  setArtist(e.target.value);
                }}
              />
              <label>Artist</label>
            </div>

            <div class="input-box">
              <select
                autoFocus={true}
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
              >
                <option selected>Select Genre</option>

                {Genres.map((Genres) => (
                  <option value={Genres.Genre} key={Genres._id}>
                    {Genres.Genre}
                  </option>
                ))}
              </select>
            </div>

            <label>Release Date</label>
            <div class="input-box">
              <input
                type="date"
                autoFocus={true}
                required
                onChange={(e) => {
                  setReleaseDate(e.target.value);
                }}
              />
            </div>

            <div class="input-box">
              <input
                type="submit"
                value="Upload Album"
                style={{ background: "#0d6efd", color: "white" }}
              />
            </div>

            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAlbums;
