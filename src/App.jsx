import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppContext } from "./context/Context";
import Home from "./pages/Home";
import Result from "./pages/Result";
import ImagesPage from "./pages/ImagesPage";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/result/all/:q" element={<Result />}></Route>
          <Route path="/result/image/:q" element={<ImagesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
