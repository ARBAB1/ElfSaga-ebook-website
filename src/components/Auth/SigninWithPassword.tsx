'use client';

import { EmailIcon, PasswordIcon } from '@/assets/icons';

import React, { useState } from 'react';
import InputGroup from '../FormElements/InputGroup';

import { useRouter } from 'next/navigation';

export default function SigninWithPassword() {
  const router = useRouter();

  const [data, setData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Demo credentials (you can also load from .env if needed)
    const demoEmail = 'demo@admin.com';
    const demoPass = 'demo123';

    setTimeout(() => {
      setLoading(false);
      if (data.email === demoEmail && data.password === demoPass) {
        router.push('/home');
      } else {
        setError('Invalid email or password.');
      }
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        type="email"
        label="Email"
        className="mb-4 [&_input]:py-[15px]"
        placeholder="Enter your email"
        name="email"
        handleChange={handleChange}
        value={data.email}
        icon={<EmailIcon />}
      />

      <InputGroup
        type="password"
        label="Password"
        className="mb-4 [&_input]:py-[15px]"
        placeholder="Enter your password"
        name="password"
        handleChange={handleChange}
        value={data.password}
        icon={<PasswordIcon />}
      />

      {error && (
        <p className="text-red-600 text-sm mb-4 -mt-2">{error}</p>
      )}

      <div className="mb-4.5">
        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#FC4341] p-4 font-medium text-white transition hover:bg-[#1E1E1E]"
        >
          Sign In
          {loading && (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent border-solid" />
          )}
        </button>
      </div>
    </form>
  );
}