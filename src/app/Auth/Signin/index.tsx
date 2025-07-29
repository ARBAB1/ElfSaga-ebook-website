
'use client';
import SigninWithPassword from "../SigninWithPassword";

export default function Signin() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative my-8 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full"></div>
        </div>
        <div className="relative px-4 text-[white] font-semibold text-sm uppercase tracking-wide">
          Sign in with email Address
        </div>
      </div>
      <SigninWithPassword />
    </div>
  );
}
