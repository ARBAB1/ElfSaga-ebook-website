import Image from "next/image";
import Link from "next/link";

export function Webheader() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
        {/* Logo only */}
        <Link href="/">
          <Image src="/images/home/aptitoodlogo.png" alt="Logo" width={150} height={60} />
        </Link>

        {/* Navigation */}
        <nav className="hidden space-x-9 md:flex">
          <Link href="/" className="text-[#1B3173] hover:text-[#2563EB]">Home</Link>
          <Link href="/about" className="text-[#1B3173] hover:text-[#2563EB]">About</Link>
          <Link href="/services" className="text-[#1B3173] hover:text-[#2563EB]">Listings</Link>
          <Link href="/pricing" className="text-[#1B3173] hover:text-[#2563EB]">Pricing</Link>
          <Link href="/contact" className="text-[#1B3173] hover:text-[#2563EB]">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <Link href="/auth/sign-in">
        <button className="rounded-md bg-[#1B3173] text-white px-4 py-1.5 hover:bg-[#2563EB] transition">
          Login
        </button>
          </Link>
          <Link href="/signup-criteria">
            <button className="rounded-md bg-[#2563EB] px-4 py-1.5 text-white hover:bg-[#1B3173] transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}