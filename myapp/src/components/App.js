import React from "react";
// import Home from "../pages/Home";
import Signup from "../pages/Signup";
import "../styles/App.css";
import Layout from "./Layout";

export default function App() {
  return (
    <Layout>
      {/* <Home /> */}
      <Signup />
    </Layout>
  );
}
