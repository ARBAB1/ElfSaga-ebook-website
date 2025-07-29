import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 min-w-[8rem] rounded font-medium text-white bg-[#A28367] hover:bg-[#C7AE87] transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
}