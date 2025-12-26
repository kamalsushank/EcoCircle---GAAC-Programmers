import React from "react";
import Navbar from "../components/Navbar";
import { Leaf, Trophy, MessageCircle, User } from "lucide-react";
import { getUser } from "../utils/userStore";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <section className="pt-32 pb-24 bg-emerald-50/40 min-h-screen">
        <h2 className="text-center mt-40 bg-emerald-50/40">Please sign in</h2>
      </section>
    );
  }

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-24 bg-emerald-50/40 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* ================= USER CARD ================= */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                <User className="text-emerald-700" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-emerald-700">
                  {user.name}
                </h2>
                <p className="text-gray-600">{user.email}</p>
              </div>

              <div className="ml-auto text-center">
                <p className="text-sm text-gray-500">Green Score</p>
                <p className="text-3xl font-bold text-emerald-600">
                  🌱 {user.greenScore}
                </p>
              </div>
            </div>
          </div>

          {/* ================= SECTIONS ================= */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Initiatives */}
            <ProfileSection
              icon={<Leaf />}
              title="Joined Initiatives"
              items={user.initiatives}
              empty="You haven’t joined any initiatives yet."
            />

            {/* Challenges */}
            <ProfileSection
              icon={<Trophy />}
              title="Challenges Taken"
              items={user.challenges}
              empty="No challenges taken yet."
            />

            {/* Insights */}
            <ProfileSection
              icon={<MessageCircle />}
              title="Your Insights"
              items={user.insights}
              empty="You haven’t shared any insights yet."
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= REUSABLE SECTION ================= */

function ProfileSection({ title, items, icon, empty }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
      <h3 className="flex items-center gap-2 font-semibold text-emerald-700 mb-4">
        {icon} {title}
      </h3>

      {items.length === 0 ? (
        <p className="text-sm text-gray-500">{empty}</p>
      ) : (
        <ul className="space-y-2 text-sm text-gray-700">
          {items.map((item, i) => (
            <li key={i} className="bg-emerald-50 rounded-lg px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
