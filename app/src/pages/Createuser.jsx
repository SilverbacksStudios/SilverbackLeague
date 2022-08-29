import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "./Auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const createUser = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateuser = async (e) => {
    e.preventDefault();

    const createUser = await auth.signUp(email, password);

    if (createUser.error) {
      toast.error(createUser.error.message, { theme: "dark" });
      return;
    }
    toast.success("User has been created", { theme: "dark" });

    setEmail("");
    setPassword("");
  };

  return (
    <Layout>
      {message && message}
      <h1>Skapa Konto</h1>

      <form onSubmit={handleCreateuser}>
        <input
          className="inputSignin"
          placeholder="Epost"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputSignin"
          placeholder="Lösenord"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" type={"submit"}>
          Skapa konto
        </button>
      </form>
    </Layout>
  );
};

export default createUser;
