import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !email) return;
    login(name, email);
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6">
          Welcome to EcoCircle 🌱
        </h2>

        <input
          placeholder="Name"
          className="w-full mb-3 p-3 border rounded-xl"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          className="w-full mb-6 p-3 border rounded-xl"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold"
        >
          Sign In / Create Account
        </button>
      </div>
    </div>
  );
}
