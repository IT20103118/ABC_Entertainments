import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

import { useNavigate } from "react-router-dom";
const DisplayAlbums = () => {
  const [Albums, setAlbums] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/album")
      .then((res) => {
        if (res.data.success) {
          setAlbums(res.data.Albums);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const OnDelete = (id) => {
    if (window.confirm("Are you sure to Dlete Album?")) {
      axios.delete(`http://localhost:8080/api/album//${id}`).then((res) => {
        if (res.data) {
          alert("delete success...!");
          window.location.reload();
        }
      });
    }
  };

  const filterData = (Albums, searchKey) => {
    const result = Albums.filter(
      (Albums) =>
        Albums.Title.toLowerCase().includes(searchKey) ||
        Albums.Artist.toLowerCase().includes(searchKey) ||
        Albums.Genre.toLowerCase().includes(searchKey)
    );
    setAlbums(result);
  };

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    axios.get("http://localhost:8080/api/album").then((res) => {
      if (res.data.success) {
        filterData(res.data.Albums, searchKey);
      }
    });
  };

  const OnUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div>
      <h3
        align="center"
        style={{ fontSize: "30px", fontFamily: "Times New Roman" }}
      >
        <b>
          <u>Display All Albums</u>
        </b>
      </h3>
      <label style={{ marginLeft: "110px" }}> Search</label>
      <input type="search" onChange={handleSearchArea} /> <br /> <br />
      <div className="container">
        <table align="center" class="table">
          <thead>
            <tr bgcolor="#79BAEC">
              <th scope="col">Title</th>
              <th scope="col">Artist</th>
              <th scope="col">Genre</th>
              <th scope="col">Release Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Albums.map((Album) => (
              <tr>
                <td>{Album.Title}</td>
                <td>{Album.Artist}</td>
                <td>{Album.Genre}</td>
                <td>{Album.ReleaseDate}</td>
                <td>
                  <Button
                    aria-label="btn btn-success"
                    size="small"
                    style={{ background: "#151B54", color: "white" }}
                    onClick={() => {
                      OnUpdate(Album._id);
                    }}
                  >
                    Edit
                  </Button>
                  &nbsp; &nbsp;
                  <Button
                    Button
                    aria-label="btn btn-success"
                    size="small"
                    style={{ background: "#800000", color: "white" }}
                    onClick={() => {
                      OnDelete(Album._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayAlbums;
