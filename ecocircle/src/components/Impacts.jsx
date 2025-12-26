import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const yearlyData = [
  { month: "Jan", trees: 4, waste: 4, co2: 1900 },
  { month: "Feb", trees: 8, waste: 8, co2: 1750 },
  { month: "Mar", trees: 12, waste: 12, co2: 1600 },
  { month: "Apr", trees: 16, waste: 16, co2: 1450 },
  { month: "May", trees: 20, waste: 20, co2: 1300 },
  { month: "Jun", trees: 24, waste: 24, co2: 1150 },
  { month: "Jul", trees: 28, waste: 28, co2: 1000 },
  { month: "Aug", trees: 32, waste: 32, co2: 850 },
  { month: "Sep", trees: 36, waste: 36, co2: 700 },
  { month: "Oct", trees: 40, waste: 40, co2: 550 },
  { month: "Nov", trees: 44, waste: 44, co2: 400 },
  { month: "Dec", trees: 52, waste: 50, co2: 250 },
];

import Navbar from "./Navbar";
export default function ImpactGraphs() {
  return (
    <section className="py-28 bg-gradient-to-b from-emerald-50 to-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-emerald-800">
          How Small Actions Create Big Change 📈
        </h2>

        <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          These graphs show how simple eco-friendly habits — when practiced
          consistently — transform the environment over just one year.
        </p>

        {/* GRAPHS */}
        <div className="mt-20 grid gap-16">
          {/* TREES */}
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">
              🌱 Planting One Tree Every Week
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              One person planting 1 tree per week results in over 50 trees in a
              year.
            </p>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="trees"
                  stroke="#10b981"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* WASTE */}
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">
              ♻️ Proper Waste Management
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Segregating waste prevents plastics from reaching landfills and
              oceans.
            </p>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="waste" fill="#34d399" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* CO2 */}
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">
              🌍 Carbon Footprint Reduction
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Eco habits like cycling, saving electricity, and reducing plastic
              drastically lower CO₂ emissions.
            </p>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="co2"
                  stroke="#059669"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* FINAL MESSAGE */}
        <div className="mt-20 text-center">
          <p className="text-2xl font-semibold text-emerald-800">
            Imagine this impact multiplied by thousands of people.
          </p>
          <p className="mt-3 text-gray-600">That’s how movements begin.</p>
        </div>
      </div>
    </section>
  );
}
