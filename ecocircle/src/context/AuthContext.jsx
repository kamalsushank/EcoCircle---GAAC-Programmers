import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("ecoUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (name, email) => {
    const newUser = {
      name,
      email,
      greenScore: 10,
      initiatives: [],
      insights: [],
      challenges: [],
    };

    localStorage.setItem("ecoUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("ecoUser");
    setUser(null);
  };

  const updateUser = (updatedUser) => {
    localStorage.setItem("ecoUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
