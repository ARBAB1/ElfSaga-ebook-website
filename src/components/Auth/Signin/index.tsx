
'use client';
import SigninWithPassword from "../SigninWithPassword";

export default function Signin() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative my-8 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#FC4341]"></div>
        </div>
        <div className="relative bg-white px-4 text-[#FC4341] font-semibold text-sm uppercase tracking-wide">
          Sign in with email
        </div>
      </div>
      <SigninWithPassword />
    </div>
  );
}
