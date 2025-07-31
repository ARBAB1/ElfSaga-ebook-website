'use client';

import dynamic from 'next/dynamic';

const CompanyActivePlans = dynamic(() => import('./Uploadvideo'), {
  ssr: false,
  loading: () => <p>Loading Company Management...</p>,
});

export default function Page() {
  return <CompanyActivePlans />;
}
