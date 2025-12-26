import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Leaf,
  Trophy,
  BarChart3,
  TrendingUp,
  User,
  LogOut,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navItem = (to, label, Icon) => {
    const active = pathname === to;

    return (
      <li>
        <Link
          to={to}
          onClick={() => setOpen(false)}
          className={`
            group flex items-center gap-2 px-4 py-2 rounded-full
            text-sm font-semibold tracking-wide transition-all duration-300
            ${
              active
                ? "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200"
                : "text-gray-600 hover:text-emerald-700 hover:bg-emerald-50"
            }
          `}
        >
          <Icon
            size={16}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          {label}
        </Link>
      </li>
    );
  };

  return (
    <div className="fixed top-4 left-0 w-full z-50">
      <div className="max-w-[92%] mx-auto px-2">
        <div
          className="
            relative flex items-center
            bg-white/80 backdrop-blur-xl
            border border-emerald-200/40
            rounded-full px-6 py-3
            shadow-[0_10px_30px_rgba(34,197,94,0.15)]
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-200/30 via-transparent to-emerald-200/30 pointer-events-none" />

          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center gap-3">
            <img
              src="/ec_logo.png"
              className="w-10 h-10 rounded-full ring-1 ring-emerald-200"
              alt="EcoCircle"
            />
            <span className="hidden sm:block font-bold text-emerald-700 tracking-wide">
              EcoCircle
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="relative z-10 hidden md:flex flex-1 justify-center gap-6">
            {navItem("/initiatives", "Initiatives", Leaf)}
            {navItem("/challenges", "Challenges", Trophy)}
            {navItem("/insights", "Insights", BarChart3)}
            {navItem("/impacts", "Impacts", TrendingUp)}
          </ul>

          {/* Right Section */}
          <div className="relative z-10 hidden md:block">
            {!user ? (
              <Link to="/auth">
                <button
                  className="
                    px-6 py-2 rounded-full
                    text-xs tracking-widest font-semibold
                    bg-emerald-500 text-white
                    hover:bg-emerald-400
                    shadow-[0_8px_20px_rgba(34,197,94,0.35)]
                    transition
                  "
                >
                  SIGN IN
                </button>
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => {
                    setProfileOpen(!profileOpen);
                    navigate("/profile");
                  }}
                  className="
                    flex items-center gap-2 px-4 py-2 rounded-full
                    bg-emerald-50 border border-emerald-200
                    text-emerald-700 font-semibold
                    hover:bg-emerald-100 transition
                  "
                >
                  <User size={16} />
                  {user.name}
                </button>

                {/* Dropdown */}
                {profileOpen && (
                  <div
                    className="
                      absolute right-0 mt-3 w-64
                      bg-white rounded-2xl
                      border border-emerald-100
                      shadow-xl p-4
                      animate-fade-in
                    "
                  >
                    <p className="font-semibold text-emerald-700">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-600">{user.email}</p>

                    <button
                      onClick={logout}
                      className="
                        mt-4 w-full flex items-center justify-center gap-2
                        py-2 rounded-full
                        bg-red-100 text-red-600
                        font-semibold hover:bg-red-200 transition
                      "
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-10 ml-auto md:hidden text-emerald-700"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
              mt-3 md:hidden
              bg-white/90 backdrop-blur-xl
              border border-emerald-200/40
              rounded-2xl px-6 py-6
              shadow-[0_15px_30px_rgba(34,197,94,0.15)]
            "
          >
            <ul className="flex flex-col gap-4 text-center">
              {navItem("/initiatives", "Initiatives", Leaf)}
              {navItem("/challenges", "Challenges", Trophy)}
              {navItem("/insights", "Insights", BarChart3)}
              {navItem("/impacts", "Impacts", TrendingUp)}

              {!user ? (
                <Link to="/auth" onClick={() => setOpen(false)}>
                  <button
                    className="
                      mt-4 w-full py-2 rounded-full
                      bg-emerald-500 text-white
                      text-xs tracking-widest font-semibold
                      hover:bg-emerald-400
                    "
                  >
                    SIGN IN
                  </button>
                </Link>
              ) : (
                <button
                  onClick={logout}
                  className="
                    mt-4 w-full py-2 rounded-full
                    bg-red-100 text-red-600
                    font-semibold hover:bg-red-200
                  "
                >
                  Logout
                </button>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
