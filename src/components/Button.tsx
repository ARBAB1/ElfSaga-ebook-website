"use client"; // If you're using App Router

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  href?: string;
}

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  href,
}: ButtonProps) {
  const baseClasses =
    "px-6 py-3 min-w-[200px] rounded font-medium text-white transition duration-300";

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${className}`} // ✅ apply classes directly to Link
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}