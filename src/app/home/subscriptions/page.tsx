'use client';

import { useState } from 'react';
import {
  FaPlus, FaFilter, FaThList, FaDownload, FaEllipsisV
} from 'react-icons/fa';

const initialPlans = [
  { title: 'Yearly', days: 365, amount: 3650, discount: 5, description: 'Best for long term', active: true },
  { title: 'Premium Offer', days: 600, amount: 5000, discount: 10, description: 'Special Offer Alert! Book now', active: true },
];

export default function SubscriptionsPage() {
  const [plans, setPlans] = useState(initialPlans);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPlan, setNewPlan] = useState({
    title: '', days: '', amount: '', discount: '', description: '', active: true,
  });

  const handleToggle = (index: number) => {
    const updated = [...plans];
    updated[index].active = !updated[index].active;
    setPlans(updated);
  };

  const handleAddPlan = () => {
    setPlans([...plans, { ...newPlan, days: +newPlan.days, amount: +newPlan.amount, discount: +newPlan.discount }]);
    setNewPlan({ title: '', days: '', amount: '', discount: '', description: '', active: true });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-poppins font-semibold text-gray-800">Subscription Plan</h2>
          <p className="text-sm text-gray-500">Home / Subscriptions</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#FC4341] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-600"
        >
          <FaPlus className="inline mr-2" />
          Add Subscriptions
        </button>
      </div>

      {/* Table Controls */}
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
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">No of Days</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Discount (%)</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Active</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr key={index} className="border-t hover:bg-[#FFF9F9]">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 text-[#FC4341] font-medium">{plan.title}</td>
                <td className="px-4 py-2">{plan.days}</td>
                <td className="px-4 py-2">{plan.amount}</td>
                <td className="px-4 py-2">{plan.discount}</td>
                <td className="px-4 py-2">{plan.description}</td>
                <td className="px-4 py-2">
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={plan.active}
                      onChange={() => handleToggle(index)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-checked:bg-[#FC4341] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                  </label>
                </td>
                <td className="px-4 py-2 text-right">
                  <button className="text-gray-500 hover:text-[#FC4341]">
                    <FaEllipsisV />
                  </button>
                </td>
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

      {/* Add Subscription Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-[#FC4341]">Add Subscription</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={newPlan.title}
                onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
                className="w-full border px-3 py-2 rounded text-sm"
              />
              <input
                type="number"
                placeholder="No of Days"
                value={newPlan.days}
                onChange={(e) => setNewPlan({ ...newPlan, days: e.target.value })}
                className="w-full border px-3 py-2 rounded text-sm"
              />
              <input
                type="number"
                placeholder="Amount"
                value={newPlan.amount}
                onChange={(e) => setNewPlan({ ...newPlan, amount: e.target.value })}
                className="w-full border px-3 py-2 rounded text-sm"
              />
              <input
                type="number"
                placeholder="Discount %"
                value={newPlan.discount}
                onChange={(e) => setNewPlan({ ...newPlan, discount: e.target.value })}
                className="w-full border px-3 py-2 rounded text-sm"
              />
              <input
                type="text"
                placeholder="Description"
                value={newPlan.description}
                onChange={(e) => setNewPlan({ ...newPlan, description: e.target.value })}
                className="w-full border px-3 py-2 rounded text-sm"
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm rounded bg-gray-200">Cancel</button>
              <button onClick={handleAddPlan} className="px-4 py-2 text-sm rounded bg-[#FC4341] text-white hover:bg-red-600">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}