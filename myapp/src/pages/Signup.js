import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import TextInput from "../components/TextInput";
import classes from "../styles/Signup.module.css";
import Form from "./Form";
import Illustration from "./Illustration";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />

          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock"
          />
          <Checkbox text="I agree to the Terms & Conditions" />

          <Button> Submit Now</Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
