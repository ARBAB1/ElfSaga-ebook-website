'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { logoutUser } from "../../../app/home/_components/constants/Apis";

export default function Header() {
  const [currentTime, setCurrentTime] = useState('');
  const router = useRouter();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const onLogout = async () => {
    try {
      await logoutUser();
      router.push("/");
    } catch (err: any) {
      console.error("Logout failed:", err.message);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-6 bg-[#066863] shadow-sm">
      {/* Left: Date & Time */}
      <div>
        <p className="text-sm text-[#36FCB4]">Today is</p>
        <p className="text-md font-medium text-[#ffffff]">{currentTime}</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* User Icon */}
        {/* <button className="w-9 h-9 flex items-center justify-center rounded-full bg-red-100 text-[#FC4341]">
          <FaUser />
        </button> */}

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="px-3 py-1 rounded bg-[#d2ffef] text-[#043627] font-medium text-sm hover:bg-[#36FCB4]"
        >
          <FaSignOutAlt className="inline-block mr-1" /> Logout
        </button>
      </div>
    </header>
  );
}
