"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Webheader } from "@/components/Layouts/web-header";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <>
      <Webheader />

      <main className="bg-white min-h-screen flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center mb-10 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-[#1B3173]">Ready to take a free trial?</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
        </div>

        <div className="w-full max-w-md border border-gray-300 rounded p-8 bg-white shadow-md">
          <h3 className="text-lg font-semibold mb-6 text-[#2563EB]">Sign up for a free account</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C7AE87]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C7AE87]"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C7AE87]"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C7AE87]"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C7AE87]"
            />

            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className="flex-1 bg-[#1B3173] text-white py-2 rounded hover:bg-[#2563EB] transition"
              >
                Register
              </button>
              <Link
                href="/auth/sign-in"
                className="flex-1 bg-[#2563EB] text-white py-2 rounded text-center hover:bg-[#1B3173] transition"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}