import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookingForm from "./components/BookingForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BookingForm />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
