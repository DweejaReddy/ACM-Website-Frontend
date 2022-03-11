import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cover from "./Components/Cover";
import OnlineCompiler from "./Components/online-compiler/OnlineCompiler";
// import ProblemDetails from "./Components/problems/ProblemDetails";
// import ProblemList from "./Components/problems/ProblemList";
import LoginPage from "./Components/Login/LoginPage";
import Home from "./Components/Login/Home";
// import PrivateRoute from "./Components/auth/PrivateRoute";
import Reset from "./Components/Login/Reset";
import Forgot from "./Components/Login/Forgot";
import HomeScreen from "./Components/Codepen/HomeScreen";
import Editor from "./Components/Codepen/Editor";
import RegisterBox from "./Components/Login/Register";
import LoginBox from "./Components/Login/Login";
import ProjectCard from "./Components/Codepen/ProjectCard";

function SiteRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Cover />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route
          path="/home"
          exact
          element={
            <Home />
            // <PrivateRoute>
            // </PrivateRoute>
          }
        />
        <Route path="/codepen" element={<HomeScreen />} />
        <Route path="/codepen/projects" element={<ProjectCard />} />
        <Route path="/codepen/projects/:id" exact element={<Editor />} />
        <Route path="/user" exact element={<LoginPage />} >
          <Route path="login" exact element={<LoginBox />} />
          <Route path="register" exact element={<RegisterBox />} />
          <Route path="reset" exact element={<Reset />} />
          <Route path="forgot" exact element={<Forgot />} />
        </Route>
        <Route path="/compiler" exact element={<OnlineCompiler />} />
        {/* <Route path="/problem-details/:id" exact element={<ProblemDetails />} /> */}
        {/* <Route path="/problem-list" exact element={<ProblemList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default SiteRouter;
