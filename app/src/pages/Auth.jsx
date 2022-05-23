import "../App.css";
import { supabase } from "../Database/supabase";
import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

export const Authprovider = ({ children }) => {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      alert("inloggad");
      useNavigate.push("/Home");
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    }

    setUser(null);
  };

  useEffect(() => {
    const user = supabase.auth.user();
    setUser(user);

    const auth = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
      }
      if (event === "SIGNED_OUT") {
        setUser(null);
      }
    });

    return () => auth.unsubscribe();
  }, []);

  return {
    user,
    login,
    logout,
  };
}
