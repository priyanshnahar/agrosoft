import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./LoginForm.css";

const Login = ({ switchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login form submitted.");
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="switch-form">
        <p>
          Don't have an account?{" "}
          <a href="/" onClick={switchToSignup}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
