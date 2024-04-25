import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" exact element={<Navigate to="/Home" />} />
      <Route path="/Home" exact element={<Home/>} />
      <Route path="/Profile" exact element={<Profile/>} />
      <Route
  path="/auth"
  exact
  element={!user ? <Auth /> : <Navigate to="/Home" replace />}
/>
      </Routes>
    </div>
  );
};

export default App;
