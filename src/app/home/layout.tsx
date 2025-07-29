import "@/css/satoshi.css";
import "@/css/style.css";

import { Sidebar } from "@/components/Layouts/sidebar";
// import Header from "@/components/Layouts/header"; // ✅ Corrected import
import HeaderWrapper from '@/components/Layouts/HeaderWrapper';


import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";


export const metadata: Metadata = {
  title: {
    template: "Clayton Real Estate",
    default: "Superadmin Dashboard",
  },
  description:
    "To manage mobile application via this dashboard.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#FCFBF7]">
        <HeaderWrapper />
        <div className="p-4 md:p-6 2xl:p-10 max-w-[1640px] mx-auto">
          {children}
        </div>
      </main>

      {/* <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#FFF3F3] dark:bg-gray-dark">
        <Header
          onLogout={() => {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "/";
          }}
        />
        <div className="p-4 md:p-6 2xl:p-10 max-w-[1440px] mx-auto">
          {children}
        </div>
      </main> */}
    </div>
  );
}
