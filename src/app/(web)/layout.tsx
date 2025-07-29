import "@/css/satoshi.css";
import "@/css/style.css";

// import { Sidebar } from "@/components/Layouts/sidebar";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

// import { Header } from "@/components/Layouts/header";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";


export const metadata: Metadata = {
    title: {
        template: "Tales From North The Pole",
        default: "Superadmin Dashboard",
    },
    description:
        "To manage mobile application via this dashboard.",
};

export default function WebLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen">

            <div className="w-full bg-[#FEF4EF] dark:bg-[#020d1a]">


                {children}

            </div>
        </div>

    );
}