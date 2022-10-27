import React from "react";

import SignupForm from "../components/SignupForm";
import Illustration from "./Illustration";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}
