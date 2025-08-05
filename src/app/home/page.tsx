'use client';
import { useEffect, useState } from 'react';
import { FaBuilding, FaCheckCircle } from 'react-icons/fa';
import { getfreeVideos } from "../home/_components/constants/Apis";
import { getpaidVideos } from "../home/_components/constants/Apis";
import { getallVideos } from "../home/_components/constants/Apis";
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
  const [freeVideos, setfreeVideos] = useState(0);
  const [paidVideos, setpaidVideos] = useState(0);
  type Company = { name: string; email: string };
  const [allVideos, setallVideos] = useState<Company[]>([]);

  useEffect(() => {
    getfreeVideos()
      .then((res: { total?: number }) => setfreeVideos(res.total || 0))
      .catch((err: unknown) => console.error("Free Video error", err));

    getpaidVideos()
      .then((res: { total?: number }) => setpaidVideos(res.total || 0))
      .catch((err: unknown) => console.error("Paid Video error", err));

    getallVideos()
      .then((res: Company[]) => setallVideos(res))
      .catch((err: unknown) => console.error("All Videos error", err));
  }, []);

  const chartData = {
    labels: ['Action', 'Mystery', 'Love Story', 'Thriller', 'Inspirational', 'Lessons'],
    datasets: [
      {
        label: 'Count',
        data: [freeVideos, 9, 6, 10, 2, paidVideos],
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
                <p className="text-2xl font-bold">{freeVideos}</p>
                <p className="font-poppins font-semibold text-sm">Free Videos</p>
              </div>
            </div>
            <div className="bg-[#066863] text-white rounded p-6 flex items-center gap-4 shadow">
              <FaBuilding className="text-3xl" />
              <div>
                <p className="text-2xl font-bold">{paidVideos}</p>
                <p className="font-poppins font-semibold text-sm">Paid Videos</p>
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
            {allVideos.map((company, idx) => (
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
