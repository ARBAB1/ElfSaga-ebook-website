'use client';

import { EmailIcon, PasswordIcon } from '@/assets/icons';
import Link from 'next/link';
import React, { useState } from 'react';
import InputGroup from '../FormElements/InputGroup';
import { Checkbox } from '../FormElements/checkbox';
import { useRouter } from 'next/navigation';
import { loginUser } from '../home/_components/constants/Apis';

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await loginUser({ username: data.email, password: data.password });

      if (res.accessToken) {
        localStorage.setItem('token', res.accessToken); // Save token if needed
        router.push('/home'); // Redirect to dashboard
      } else {
        setError(res.error || 'Invalid email or password.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
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
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#066863] p-4 font-medium text-white transition hover:bg-[#122031]"
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