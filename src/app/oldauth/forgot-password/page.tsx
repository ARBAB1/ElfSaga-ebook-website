'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle forgot password logic
    alert(`Reset link sent to ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#A28367] mb-6">Forgot Password</h2>
        <p className="text-gray-600 text-sm mb-6 text-center">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A28367]"
          />
          <button
            type="submit"
            className="w-full bg-[#A28367] text-white py-2 rounded hover:bg-[#C7AE87] transition"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/auth/sign-in" className="text-sm text-[#A28367] hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
