import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Posts from "./components/Posts";

export default function App() {
  const isLoggedIn = true;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home/*" element={<Home />}>
          <Route path="world" element={<p>This is world!</p>} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <About />}
        />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}
