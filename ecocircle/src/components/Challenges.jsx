import React from "react";
import { Trophy, Leaf, Recycle } from "lucide-react";
import Navbar from "./Navbar";
import { useAuth } from "../context/AuthContext";

export default function Challenges() {
  const { user, updateUser } = useAuth();

  const challenges = [
    {
      title: "7-Day Plastic Free",
      desc: "Avoid single-use plastics for a week and build a sustainable habit.",
      score: 120,
      icon: Recycle,
    },
    {
      title: "Plant a Tree",
      desc: "Plant at least one tree and help grow a greener future.",
      score: 150,
      icon: Leaf,
    },
    {
      title: "Eco Lifestyle Week",
      desc: "Walk, cycle, save energy, and reduce waste for 7 days.",
      score: 200,
      icon: Trophy,
    },
  ];

  const handleChallenge = (challenge) => {
    if (!user) {
      alert("Please sign in to take a challenge");
      return;
    }

    if (user.challenges?.includes(challenge.title)) return;

    updateUser({
      ...user,
      challenges: [...(user.challenges || []), challenge.title],
      greenScore: (user.greenScore || 10) + challenge.score,
    });
  };

  return (
    <main className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_60%)]" />

        <h1 className="relative text-4xl md:text-5xl font-extrabold text-emerald-700 tracking-tight">
          Eco Challenges 🌍
        </h1>

        <p className="relative mt-4 max-w-xl mx-auto text-gray-600">
          Take simple eco-friendly challenges and earn GreenScore for every
          positive step you take.
        </p>
      </section>

      {/* CHALLENGES */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            const taken = user?.challenges?.includes(item.title);

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 
                           border border-emerald-100
                           shadow-md hover:shadow-xl
                           hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-full bg-emerald-100 
                             flex items-center justify-center mb-6 
                             shadow-inner"
                >
                  <Icon className="text-emerald-700" size={26} />
                </div>

                <h3 className="text-xl font-semibold text-emerald-800">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div
                  className="mt-6 inline-flex items-center gap-2 
                             px-4 py-1.5 rounded-full 
                             bg-emerald-50 text-emerald-700 
                             text-sm font-semibold"
                >
                  +{item.score} GreenScore
                </div>

                <button
                  onClick={() => handleChallenge(item)}
                  disabled={taken}
                  className={`mt-8 w-full py-2.5 rounded-full font-semibold transition-all ${
                    taken
                      ? "bg-emerald-100 text-emerald-700 cursor-default"
                      : "bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-md"
                  }`}
                >
                  {taken ? "Challenge Taken ✅" : "Take Challenge"}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
