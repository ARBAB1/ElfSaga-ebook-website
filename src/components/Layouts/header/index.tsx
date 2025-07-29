'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSignOutAlt } from 'react-icons/fa';

// Define the types for the Header props
interface HeaderProps {
  onLogout: () => void; // onLogout will be passed as a function prop
}

export default function Header({ onLogout }: HeaderProps) {
  const [currentTime, setCurrentTime] = useState('');
  const router = useRouter();

  // Update the current time every second
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

  return (
    <header className="flex justify-between items-center px-6 py-6 bg-[#066863] shadow-sm">
      {/* Left: Date & Time */}
      <div>
        <p className="text-sm text-[#36FCB4]">Today is</p>
        <p className="text-md font-medium text-[#ffffff]">{currentTime}</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Logout Button */}
        <button
          onClick={onLogout} // Handle logout when clicked
          className="px-3 py-1 rounded bg-[#d2ffef] text-[#043627] font-medium text-sm hover:bg-[#36FCB4]"
        >
          <FaSignOutAlt className="inline-block mr-1" /> Logout
        </button>
      </div>
    </header>
  );
}
