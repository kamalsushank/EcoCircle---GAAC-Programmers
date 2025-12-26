import React, { useState, useEffect } from "react";
import { MessageCircle, PenLine, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";

export default function Insights() {
  const { user, updateUser } = useAuth();

  const defaultInsights = [
    {
      name: "Ananya",
      text: "Participating in a local clean-up made me realize how small actions can create visible change.",
    },
    {
      name: "Rahul",
      text: "Switching to cycling for short distances reduced pollution and improved my health.",
    },
    {
      name: "Meera",
      text: "Planting trees with my community gave me hope for a greener future.",
    },
  ];

  const [insights, setInsights] = useState(() => {
    const stored = localStorage.getItem("communityInsights");
    return stored ? JSON.parse(stored) : defaultInsights;
  });

  const [newInsight, setNewInsight] = useState("");

  useEffect(() => {
    localStorage.setItem("communityInsights", JSON.stringify(insights));
  }, [insights]);

  const handlePostInsight = () => {
    if (!user) {
      alert("Please sign in to share an insight");
      return;
    }

    if (!newInsight.trim()) return;

    const insight = {
      name: user.name,
      text: newInsight,
    };

    setInsights([insight, ...insights]);

    updateUser({
      ...user,
      insights: [...(user.insights || []), newInsight],
      greenScore: (user.greenScore || 10) + 2,
    });

    setNewInsight("");
  };

  return (
    <main className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_60%)]" />

        <h1 className="relative text-4xl md:text-5xl font-extrabold text-emerald-700 tracking-tight">
          Community Insights 💬
        </h1>

        <p className="relative mt-4 max-w-xl mx-auto text-gray-600">
          Read real stories from people making small changes that matter — and
          share your own journey.
        </p>
      </section>

      {/* WRITE INSIGHT */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="bg-white rounded-2xl p-6 
                       border border-emerald-100 
                       shadow-md"
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-emerald-700 mb-4">
              <PenLine size={20} />
              Share Your Insight
            </h3>

            <textarea
              value={newInsight}
              onChange={(e) => setNewInsight(e.target.value)}
              placeholder={
                user
                  ? "Write about a small eco-friendly step you took..."
                  : "Sign in to share your insight"
              }
              disabled={!user}
              className="w-full h-32 rounded-xl border border-emerald-100 
                         p-4 text-sm resize-none 
                         focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />

            <div className="flex justify-end mt-4">
              <button
                onClick={handlePostInsight}
                disabled={!user}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  user
                    ? "bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-md"
                    : "bg-emerald-100 text-emerald-400 cursor-not-allowed"
                }`}
              >
                Post Insight (+2 GreenScore)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS LIST */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 
                         border border-emerald-100 
                         shadow-md hover:shadow-xl 
                         hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full bg-emerald-100 
                             flex items-center justify-center"
                >
                  <User size={18} className="text-emerald-700" />
                </div>
                <p className="font-semibold text-emerald-800">{item.name}</p>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.text}
              </p>

              <div className="mt-6 flex items-center gap-2 text-emerald-600 text-sm font-medium">
                <MessageCircle size={16} />
                Community Insight
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
