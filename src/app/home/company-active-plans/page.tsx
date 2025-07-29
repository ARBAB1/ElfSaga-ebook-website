'use client';

import { useState } from 'react';
import {
  FaFilter, FaThList, FaDownload
} from 'react-icons/fa';

const plans = [
  {
    orderDate: '5 May 2025',
    endDate: '5 May 2026',
    company: 'Sunshine Properties Pvt Ltd',
    plan: 'Yearly',
    discount: 5,
    days: 365,
    amount: 'INR 3650'
  },
  {
    orderDate: '14 Jun 2025',
    endDate: '4 Feb 2027',
    company: 'Company Properties Pvt Ltd',
    plan: 'Premium Offer',
    discount: 10,
    days: 600,
    amount: 'INR 5000'
  }
];

export default function CompanyActivePlansPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-poppins font-semibold text-gray-800">Company Active Plan</h2>
        <p className="text-sm text-gray-500">Home / Company Active Plan</p>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center bg-white p-4 rounded shadow">
        <div className="flex gap-3 text-sm text-gray-600">
          <button className="flex items-center gap-1"><FaThList /> Columns</button>
          <button className="flex items-center gap-1"><FaFilter /> Filters</button>
          <button className="flex items-center gap-1"><FaThList /> Density</button>
          <button className="flex items-center gap-1"><FaDownload /> Export</button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="border text-sm px-3 py-2 rounded w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#FFF3F3] text-[#FC4341]">
            <tr>
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">Order Date</th>
              <th className="px-4 py-3">End Date</th>
              <th className="px-4 py-3">Company Name</th>
              <th className="px-4 py-3">Subscription Plan</th>
              <th className="px-4 py-3">Discount (%)</th>
              <th className="px-4 py-3">No Of Days</th>
              <th className="px-4 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr key={index} className="border-t hover:bg-[#FFF9F9]">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{plan.orderDate}</td>
                <td className="px-4 py-2">{plan.endDate}</td>
                <td className="px-4 py-2">{plan.company}</td>
                <td className="px-4 py-2">{plan.plan}</td>
                <td className="px-4 py-2">{plan.discount}</td>
                <td className="px-4 py-2">{plan.days}</td>
                <td className="px-4 py-2">{plan.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-600">
          <span>Rows per page:</span>
          <select className="border rounded px-2 py-1 text-sm">
            <option>100</option>
            <option>50</option>
            <option>25</option>
          </select>
          <span>1–{plans.length} of {plans.length}</span>
          <div className="flex gap-2">
            <button>{'<'}</button>
            <button>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
