import React from "react";
import {
  Leaf,
  Users,
  Clock,
  Bell,
  Trophy,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-emerald-50 via-white to-white">
      <Navbar />
      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 leading-tight">
            Let’s Take Care of Nature <br /> Together 🌍
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            EcoCircle helps you join people nearby to clean, plant trees, and
            protect the environment.
          </p>

          <div className="mt-10 flex justify-center">
            <Link to="/initiatives">
              <button className="px-8 py-3 rounded-full bg-emerald-500 text-white font-semibold shadow-md hover:bg-emerald-400 transition">
                Join an Initiative
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-emerald-700">
            How EcoCircle Works
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              { step: "1", title: "Find Nearby Initiatives" },
              { step: "2", title: "Join or Create One" },
              { step: "3", title: "Take Action Together" },
              { step: "4", title: "See Your Impact Grow" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-emerald-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <p className="mt-4 font-semibold text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center">
          {[
            { label: "Trees Planted", value: "2,430 🌳" },
            { label: "Waste Collected", value: "1,120 kg ♻️" },
            { label: "Active Members", value: "680 👥" },
            { label: "Green Hours", value: "9,300 ⏱️" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-emerald-700">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-emerald-700">
            What You Can Do on EcoCircle
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Leaf,
                title: "Create & Join Initiatives",
                desc: "Clean-ups, tree plantations, awareness drives near you.",
                button: "Explore Initiatives",
                path: "initiatives",
              },
              {
                icon: Users,
                title: "Track Real Impact",
                desc: "See trees planted, waste collected, and people involved.",
                button: "View Impact",
                path: "impacts",
              },
              {
                icon: Clock,
                title: "Green Score",
                desc: "Your time and effort turn into meaningful impact points.",
                button: "Check Your Score",
                path: "profile",
              },
              {
                icon: Bell,
                title: "Smart Reminders",
                desc: "Never miss an initiative or eco event again.",
                button: "Set Reminders",
                path: "auth",
              },
              {
                icon: Trophy,
                title: "Eco Challenges",
                desc: "Fun weekly & monthly challenges for eco habits.",
                button: "Join a Challenge",
                path: "challenges",
              },
              {
                icon: Trophy,
                title: "Share & Inspire",
                desc: "Post your eco actions and motivate others.",
                button: "Share Your Insights",
                path: "insights",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition">
                    <Icon className="text-emerald-700" size={22} />
                  </div>
                  <h3 className="font-semibold text-emerald-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                  <Link to={`/${item.path}`}>
                    <button className="mt-4 text-emerald-600 font-semibold text-sm group-hover:underline inline-flex items-center gap-1">
                      {item.button} <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-emerald-100 to-emerald-50">
        <h2 className="text-3xl font-bold text-emerald-700">
          The planet doesn’t need perfect people.
        </h2>
        <p className="mt-3 text-gray-600">
          It needs people who care and take action. 💚
        </p>
        <Link to="/initiatives">
          <button className="mt-8 px-10 py-4 rounded-full bg-emerald-500 text-white font-semibold shadow-lg hover:bg-emerald-400 transition inline-flex items-center gap-2">
            Start Your Eco Journey <ArrowRight size={18} />
          </button>
        </Link>
      </section>
    </main>
  );
}
