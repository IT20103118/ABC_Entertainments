import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UpdateAlbum from "./components/albums/UpdateAlbum";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<UpdateAlbum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
