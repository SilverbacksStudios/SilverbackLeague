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

    const signIn = await auth.login(email, password);

    if (signIn.error) {
      setMessage(signIn.error.message);
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type={"submit"}>Create Account</button>
      </form>
    </Layout>
  );
};

export default createUser;
