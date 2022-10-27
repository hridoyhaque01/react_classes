import React from "react";
import SigninForm from "../components/SigninForm";
import Illustration from "./Illustration";

export default function Signin() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <SigninForm />
      </div>
    </>
  );
}
