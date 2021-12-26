import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Create from "../pages/Create";
import Explore from "../pages/Explore";
import Welcome from "../pages/Welcome";

function Top() {
  return (
    <Router>
      <nav class="navbar fixed-top navbar-expand navbar-light bg-light">
        <div class="container d-flex flex-content-between">
          <div class="navbar-nav">
            <Link class="navbar-brand" to="/">
              <h4 class="text-success">Vibes</h4>
            </Link>
          </div>
          <div class="navbar-nav">
            <ul class="navbar-nav d-flex">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/signUp">
                  Sign Up
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/signIn">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route
          path="/Create-a-new-implementation-1"
          element={<Create />}
        ></Route>
        <Route path="/Explore-implementations-1" element={<Explore />}></Route>
        <Route
          path="/Welcome-to-RealWorld-project-1"
          element={<Welcome />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default Top;
