// home/_components/BarChart.tsx
'use client';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['Company', 'Tenants', 'Agents', 'Property', 'Subscription Plan', 'Active Company'],
  datasets: [
    {
      label: 'Count',
      data: [6, 9, 6, 10, 2, 6],
      backgroundColor: '#FC4341',
    },
  ],
};

export default function BarChart() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold text-gray-700 mb-2">Admin Dashboard Overview</h3>
      <Bar data={data} />
    </div>
  );
}
