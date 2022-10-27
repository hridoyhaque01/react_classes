import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Form from "../pages/Form";
import Button from "./Button";
import TextInput from "./TextInput";

export default function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const { signin } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    // do validation

    try {
      setError("");
      setLoading(true);
      await signin(email, password);
      navigate("/");
    } catch (err) {
      console.log("err");
      setLoading(false);
      setError("Failed to login");
    }
  }
  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error} </p>}

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
