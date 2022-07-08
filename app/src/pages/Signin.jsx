import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "./Auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const SignIn = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    const signIn = await auth.login(email, password);

    if (signIn.error) {
      toast.error(signIn.error.message);
      return;
    }
    toast.success("You are now logged in", { authClose: false });
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
