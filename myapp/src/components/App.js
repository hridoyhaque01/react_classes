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
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<PublicRoute />}>
              <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="/signin" element={<PublicRoute />}>
              <Route path="/signin" element={<Signin />} />
            </Route>

            <Route path="/quiz" element={<PrivateRoute />}>
              <Route path="/quiz/:id" element={<Quiz />} />
            </Route>
            <Route path="/result" element={<PrivateRoute />}>
              <Route path="/result/:id" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}
