import { Webheader } from "@/components/Layouts/web-header";
import Signin from "@/components/Auth/Signin";
//import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-auto overflow-hidden flex-col bg-[#EAF4FF]">
      {/* Global Header */}
      <Webheader />

      {/* Breadcrumb – optional  <Breadcrumb pageName="Sign In" />*/}
      <div className="justify-center align-items-center  my-auto  bg-[#EAF4FF]  overflow-hidden">

        <div className="rounded-xl bg-white flex-4 max-w-6xl mx-auto overflow-hidden flex flex-col md:flex-row shadow-card-2 ">
          {/* Left: Sign-In Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <Signin />
          </div>

          {/* Right: Welcome Panel */}
          <div className="hidden md:flex w-full md:w-1/2 bg-[#EAF4FF] text-white items-center justify-center p-12 relative">
            <div className="text-center max-w-md">
              {/* Optional Logo Placeholder */}
              <Link href="/" className="inline-block mb-8">
                <Image
                  src="/images/home/aptitoodlogo.png"
                  alt="Logo"
                  width={150}
                  height={50}
                  className="mx-auto"
                />
              </Link>

              <p className="text-lg font-medium mb-2 text-[#1B3173]">Sign in to your account</p>
              <h1 className="text-3xl font-bold mb-4 text-[#1B3173]">Welcome Back!</h1>
              <p className="text-sm text-[#0f0d0c] leading-relaxed">
                Please sign in to your account by completing the necessary fields
                below. Access your dashboard, track progress, and much more.
              </p>

              {/* Optional Illustration */}
              <div className="mt-10">
                <Image
                  src="/images/home/aptitoodlogo.png"
                  alt="Illustration"
                  width={320}
                  height={240}
                  className="mx-auto opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
