import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Upload from "./components/Upload";
import GalleryImage from "./components/GalleryImage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Gallery />} path="/"></Route>
        <Route element={<Upload />} path="/upload"></Route>
        <Route element={<GalleryImage />} path="/gallery_image"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
