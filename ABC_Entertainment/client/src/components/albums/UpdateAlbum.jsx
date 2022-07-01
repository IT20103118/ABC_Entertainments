import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";

const UpdateAlbum = () => {
  const [Title, setTitle] = useState("");
  const [Artist, setArtist] = useState("");
  const [Genre, setGenre] = useState("");
  const [ReleaseDate, setReleaseDate] = useState("");
  const [Genres, setGenres] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
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

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/album/${id}`)
      .then((res) => {
        if (res.data.success) {
          setTitle(res.data.Album.Title);
          setArtist(res.data.Album.Artist);
          setGenre(res.data.Album.Genre);
          setReleaseDate(res.data.Album.ReleaseDate);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const updateData = {
      Title,
      Artist,
      Genre,
      ReleaseDate,
    };
    axios
      .patch(`http://localhost:8080/api/album/${id}`, updateData)
      .then((res) => {
        if (res.data.success) {
          alert("Update successful....!");
          navigate("/");
        } else {
          alert("Update error....!");
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
              src="https://res.cloudinary.com/desnqqj6a/image/upload/v1656661470/Cassette_player-bro_fk9sih.png"
              alt=""
            />
          </div>

          <form class="addAlbumForm" onSubmit={onSubmit}>
            <div class="topic">Update Album</div>
            <div class="input-box">
              <input
                type="text"
                value={Title}
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
                value={Artist}
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
                value={Genre}
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
                value={ReleaseDate}
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
                value="Update Album"
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

export default UpdateAlbum;
