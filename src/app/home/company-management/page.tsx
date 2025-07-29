'use client';

import dynamic from 'next/dynamic';

const CompanyManagementPage = dynamic(() => import('./Uploadvideo'), {
  ssr: false,
  loading: () => <p>Loading Company Management...</p>,
});

export default function Page() {
  return <CompanyManagementPage />;
}
