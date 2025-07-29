'use client';
import { useEffect, useState } from 'react';
import { FaBuilding, FaCheckCircle } from 'react-icons/fa';
// import { getTotalCompanies } from "../home/_components/constants/Apis";
// TODO: Import getActiveCompanies from the correct module or implement it if needed
// import getTopTenCompanies from the correct location or implement it if needed
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Home() {
  const [totalCompanies, setTotalCompanies] = useState(0);
  const [activeCompanies, setActiveCompanies] = useState(0);
  type Company = { name: string; email: string };
  const [topCompanies, setTopCompanies] = useState<Company[]>([]);

  // useEffect(() => {
  //   getTotalCompanies()
  //     .then((res: { total?: number }) => setTotalCompanies(res.total || 0))
  //     .catch((err: unknown) => console.error("Total company error", err));

  //   getActiveCompanies()
  //     .then((res: { total?: number }) => setActiveCompanies(res.total || 0))
  //     .catch((err: unknown) => console.error("Active company error", err));

  //   getTopTenCompanies()
  //     .then((res: Company[]) => setTopCompanies(res))
  //     .catch((err: unknown) => console.error("Top companies error", err));
  // }, []);

  const chartData = {
    labels: ['Action', 'Mystery', 'Love Story', 'Thriller', 'Inspirational', 'Lessons'],
    datasets: [
      {
        label: 'Count',
        data: [totalCompanies, 9, 6, 10, 2, activeCompanies],
        backgroundColor: '#066863',
      },
    ],
  };

  return (
    <div className="bg-[#ffffff] p-6 rounded-lg w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Cards + Chart */}
        <div className="lg:col-span-2 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#066863] text-white rounded p-6 flex items-center gap-4 shadow">
              <FaBuilding className="text-3xl" />
              <div>
                <p className="text-2xl font-bold">{totalCompanies}</p>
                <p className="font-poppins font-semibold text-sm">Total Videos</p>
              </div>
            </div>
            <div className="bg-[#066863] text-white rounded p-6 flex items-center gap-4 shadow">
              <FaBuilding className="text-3xl" />
              <div>
                <p className="text-2xl font-bold">{activeCompanies}</p>
                <p className="font-poppins font-semibold text-sm">Active Videos</p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-poppins font-semibold mb-4 text-gray-800">
              Viewed Videos By Category
            </h3>
            <Bar data={chartData} />
          </div>
        </div>

        {/* Right: Top 10 Companies */}
        <div className="bg-white p-6 rounded shadow h-full">
          <h3 className="text-lg font-poppins font-semibold mb-4 text-gray-800">
            Last Posted Videos By Admin
          </h3>
          <ul className="space-y-4 text-sm text-gray-700">
            {topCompanies.map((company, idx) => (
              <li key={idx} className="flex justify-between items-start border-b pb-2">
                <div>
                  <p className="font-poppins font-semibold text-sm">{company?.name}</p>
                  <p className="text-gray-500 text-xs">{company?.email}</p>
                </div>
                <FaCheckCircle className="text-green-500 mt-1" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
