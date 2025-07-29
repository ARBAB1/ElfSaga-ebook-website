'use client';

import { useState } from 'react';
import {
  FaFilter, FaThList, FaDownload
} from 'react-icons/fa';

const transactionData = [
  {
    company: 'Company Properties Pvt Ltd',
    plan: 'Premium Offer',
    days: 600,
    date: '6/14/2025 5:29:31 PM',
    amount: '5000 $',
  },
  {
    company: 'Company Properties Pvt Ltd',
    plan: 'Premium Offer',
    days: 600,
    date: '6/12/2025 2:35:55 PM',
    amount: '5000 $',
  },
  {
    company: 'Company Properties Pvt Ltd',
    plan: 'Yearly',
    days: 365,
    date: '6/12/2025 2:35:50 PM',
    amount: '3650 $',
  },
  {
    company: 'Company Properties Pvt Ltd',
    plan: 'Yearly',
    days: 365,
    date: '6/9/2025 10:17:28 PM',
    amount: '3650 $',
  },
  {
    company: 'Company Properties Pvt Ltd',
    plan: 'Yearly',
    days: 365,
    date: '6/9/2025 3:44:47 PM',
    amount: '3650 $',
  },
  {
    company: 'Company Properties Pvt Ltd',
    plan: 'Yearly',
    days: 365,
    date: '6/9/2025 1:11:21 AM',
    amount: '3650 $',
  },
  {
    company: 'Company Properties Pvt Ltd',
    plan: 'Yearly',
    days: 365,
    date: '6/7/2025 3:36:15 AM',
    amount: '3650 $',
  },
  {
    company: 'Company Properties Pvt Ltd',
    plan: 'Premium Offer',
    days: 600,
    date: '6/2/2025 9:11:43 AM',
    amount: '5000 $',
  }
];

export default function TransactionsPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-poppins font-semibold text-gray-800">Transactions</h2>
        <p className="text-sm text-gray-500">Home / Transaction</p>
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
              <th className="px-4 py-3">S.No.</th>
              <th className="px-4 py-3">Company Name</th>
              <th className="px-4 py-3">Subscription Plan Name</th>
              <th className="px-4 py-3">No. of Days</th>
              <th className="px-4 py-3">Purchase Date & Time</th>
              <th className="px-4 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((txn, index) => (
              <tr key={index} className="border-t hover:bg-[#FFF9F9]">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{txn.company}</td>
                <td className="px-4 py-2">{txn.plan}</td>
                <td className="px-4 py-2">{txn.days}</td>
                <td className="px-4 py-2">{txn.date}</td>
                <td className="px-4 py-2">{txn.amount}</td>
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
          <span>1–{transactionData.length} of {transactionData.length}</span>
          <div className="flex gap-2">
            <button>{'<'}</button>
            <button>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
