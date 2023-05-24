import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./App.css";
import "@arco-design/web-react/dist/css/arco.css";
import './App.less'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserInfo from "./pages/UserInfo";
function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/log-in" element={<Login />}/>
              <Route path="/sign-up" element={<Signup />}/>
              <Route path="/user-info" element={<UserInfo />}/>
              <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
      </Router>
  );
}

export default App;
