// home/_components/KpiCard.tsx
import React from 'react';

type KpiCardProps = {
  label: string;
  value: string | number;
  icon: React.ReactNode;
};

export default function KpiCard({ label, value, icon }: KpiCardProps) {
  return (

      <div className="bg-[#FC4341] text-white rounded p-6 flex items-center gap-4 shadow">
        <div className="text-3xl">{icon}</div>
        <div>
          <div className="text-lg font-bold">{value}</div>
          <div className="text-sm">{label}</div>
        </div>
    </div>
  );
}
