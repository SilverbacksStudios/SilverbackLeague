import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "./Auth";
import "../App.css";

const SignIn = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    const signIn = await auth.login(email, password);

    if (signIn.error) {
      setMessage(signIn.error.message);
    } else {
      setMessage("You are now logged in.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Layout>
      {message && message}
      <h1>Sign In</h1>

      <form className="form" onSubmit={handleSignIn}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" type={"submit"}>
          Sign In
        </button>
      </form>
    </Layout>
  );
};

export default SignIn;
