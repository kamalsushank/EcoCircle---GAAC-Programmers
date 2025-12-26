import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Initiatives from "./components/Initiatives";
import Challenges from "./components/Challenges";
import Auth from "./components/Auth";
import Impacts from "./components/Impacts";
import Profile from "./components/Profile";
import Insights from "./components/Insights";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/impacts" element={<Impacts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
