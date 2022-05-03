import { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { useAuth } from "../contexts/Auth";

export function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const { signUp } = useAuth();

    const history = useHistory();

    async function handleSubmit(e) {
      e.preventDefault();

      // Get email and password input values
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      // Calls `signUp` function from the context
      const { error } = await signUp({ email, password });

      if (error) {
        alert("error signing in");
      } else {
        // Redirect user to Dashboard
        history.push("/");
      }
    }

    return (
      <>
        <form onSubmit={handleSubmit}>{/* ... */}</form>

        <br />

        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </>
    );
  }
}
