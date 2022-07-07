import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "./Auth";

const createUser = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateuser = async (e) => {
    e.preventDefault();

    const createUser = await auth.signUp(email, password);

    if (createUser.error) {
      setMessage(createUser.error.message);
    } else {
      setMessage("Login link has beent sent.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Layout>
      {message && message}
      <h1>Create Account</h1>

      <form onSubmit={handleCreateuser}>
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
          Sign up
        </button>
      </form>
    </Layout>
  );
};

export default createUser;
