import React from "react";
import AddAlbums from "./albums/AddAlbums";
import DisplayAlbums from "./albums/DisplayAlbums";

const Home = () => {
  return (
    <div>
      <AddAlbums />
      <DisplayAlbums />
    </div>
  );
};

export default Home;
