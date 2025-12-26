import React, { useState } from "react";
import { Leaf, Plus, MapPin, Users, Calendar, X } from "lucide-react";
import Navbar from "./Navbar";
import { useAuth } from "../context/AuthContext";

/* DEFAULT DATA */
const initialUpcoming = [
  {
    title: "Park Clean-Up Drive",
    location: "MVP Colony, Vizag",
    date: "28 Dec 2025",
    people: 24,
  },
  {
    title: "Tree Plantation Program",
    location: "GITAM Campus",
    date: "5 Jan 2026",
    people: 42,
  },
];

const completedInitiatives = [
  {
    title: "Beach Clean-Up Drive",
    location: "Rushikonda Beach, Vizag",
    date: "20 Dec 2025",
    people: 58,
  },
  {
    title: "Tree Plantation Program",
    location: "GITAM Campus",
    date: "15 Dec 2025",
    people: 120,
  },
  {
    title: "Plastic-Free Awareness Walk",
    location: "RK Beach Road",
    date: "10 Dec 2025",
    people: 75,
  },
];

export default function Initiatives() {
  const { user, updateUser } = useAuth();

  const [upcoming, setUpcoming] = useState(initialUpcoming);
  const [showModal, setShowModal] = useState(false);
  const [newInit, setNewInit] = useState({
    title: "",
    location: "",
    date: "",
  });

  /* JOIN INITIATIVE */
  const handleJoin = (title) => {
    if (!user) {
      alert("Please sign in to join an initiative");
      return;
    }

    if (user.initiatives?.includes(title)) return;

    updateUser({
      ...user,
      initiatives: [...(user.initiatives || []), title],
      greenScore: (user.greenScore || 10) + 5,
    });
  };

  /* CREATE INITIATIVE */
  const handleCreate = () => {
    if (!newInit.title || !newInit.location || !newInit.date) {
      alert("Fill all fields");
      return;
    }

    setUpcoming([...upcoming, { ...newInit, people: 1 }]);
    setNewInit({ title: "", location: "", date: "" });
    setShowModal(false);
  };

  return (
    <main className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_60%)]" />

        <h1 className="relative text-4xl md:text-5xl font-extrabold text-emerald-700 tracking-tight">
          Take Action Near You 🌍
        </h1>

        <p className="relative mt-4 max-w-xl mx-auto text-gray-600">
          Small community actions create massive environmental impact. Join
          initiatives happening around you.
        </p>

        <div className="relative mt-10 flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-8 py-3 rounded-full 
                       bg-emerald-500 text-white font-semibold 
                       shadow-lg hover:shadow-xl hover:-translate-y-0.5 
                       transition-all duration-300"
          >
            <Plus size={18} />
            Create New Initiative
          </button>
        </div>
      </section>

      {/* UPCOMING INITIATIVES */}
      <section className="pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 text-center mb-12">
          Upcoming Initiatives 🌱
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((item, index) => {
            const joined = user?.initiatives?.includes(item.title);

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 
                           border border-emerald-100
                           shadow-md hover:shadow-xl
                           hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 bg-emerald-100 rounded-full 
                                flex items-center justify-center mb-4 shadow-inner"
                >
                  <Leaf className="text-emerald-700" />
                </div>

                <h3 className="font-semibold text-lg text-emerald-800">
                  {item.title}
                </h3>

                <div className="mt-4 text-sm text-gray-600 space-y-2">
                  <p className="flex gap-2 items-center">
                    <MapPin size={14} /> {item.location}
                  </p>
                  <p className="flex gap-2 items-center">
                    <Calendar size={14} /> {item.date}
                  </p>
                  <p className="flex gap-2 items-center">
                    <Users size={14} /> {item.people} people joined
                  </p>
                </div>

                <button
                  onClick={() => handleJoin(item.title)}
                  disabled={joined}
                  className={`mt-6 w-full py-2.5 rounded-full font-semibold transition-all ${
                    joined
                      ? "bg-emerald-100 text-emerald-700 cursor-default"
                      : "bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-md"
                  }`}
                >
                  {joined ? "Joined ✅" : "Join Initiative"}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMPLETED INITIATIVES */}
      <section className="pb-28">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 text-center mb-12">
          Completed Initiatives ✅
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {completedInitiatives.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-white
                         border border-emerald-200 rounded-2xl p-6
                         shadow-md hover:shadow-lg transition"
            >
              <div
                className="w-12 h-12 rounded-full bg-emerald-100 
                              flex items-center justify-center mb-4"
              >
                <Leaf className="text-emerald-700" size={22} />
              </div>

              <h3 className="text-lg font-semibold text-emerald-800">
                {item.title}
              </h3>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> {item.location}
                </p>
                <p className="flex items-center gap-2">
                  <Calendar size={16} /> {item.date}
                </p>
                <p className="flex items-center gap-2">
                  <Users size={16} /> {item.people} participants
                </p>
              </div>

              <div
                className="mt-6 w-full py-2 rounded-full 
                              bg-emerald-100 text-emerald-800 
                              font-semibold text-center tracking-wide"
              >
                Completed 🌿
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CREATE INITIATIVE MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm 
                        flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-3xl w-96 relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>

            <h3 className="text-xl font-semibold text-emerald-700 mb-4">
              Create Initiative
            </h3>

            <input
              placeholder="Title"
              className="w-full border border-gray-200 p-2.5 rounded-lg 
                         focus:ring-2 focus:ring-emerald-300 mb-3"
              value={newInit.title}
              onChange={(e) =>
                setNewInit({ ...newInit, title: e.target.value })
              }
            />

            <input
              placeholder="Location"
              className="w-full border border-gray-200 p-2.5 rounded-lg 
                         focus:ring-2 focus:ring-emerald-300 mb-3"
              value={newInit.location}
              onChange={(e) =>
                setNewInit({ ...newInit, location: e.target.value })
              }
            />

            <input
              type="date"
              className="w-full border border-gray-200 p-2.5 rounded-lg 
                         focus:ring-2 focus:ring-emerald-300 mb-5"
              value={newInit.date}
              onChange={(e) => setNewInit({ ...newInit, date: e.target.value })}
            />

            <button
              onClick={handleCreate}
              className="w-full py-2.5 rounded-full 
                         bg-emerald-500 text-white font-semibold 
                         hover:bg-emerald-400 transition"
            >
              Create Initiative
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
