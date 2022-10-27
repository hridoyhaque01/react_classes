import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import "../styles/App.css";
import Layout from "./Layout";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}
