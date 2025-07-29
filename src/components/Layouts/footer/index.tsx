import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#F3F9FF] text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left Logo & Intro */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <Image src="/images/home/aptitoodlogo.png" alt="Logo" width={180} height={50} />
          </div>
          <p className="text-sm text-gray-600">
            Sed porttitor erat mollis urna tempor, tempor molestie tortor consequatm primis in faucibus.
          </p>
        <div className="flex gap-4 mt-4">
  {['FB', 'LI', 'X', 'YT'].map((label, i) => (
    <span
      key={i}
      className="bg-[#18275A] text-[#F3F9FF] rounded-md px-3 py-1 text-sm font-medium hover:opacity-90 cursor-pointer"
    >
      {label}
    </span>
  ))}
</div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#18275A]">Get In touch with Us</h4>
          <ul className="text-sm text-gray-600 space-y-4">
            <li>📍 No.58 East Madison Road, USA</li>
            <li>📞 +00 12 34 45 67 89</li>
            <li>✉️ support@example.com</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#18275A]">Support</h4>
          <ul className="text-sm text-gray-600 space-y-4">
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Our Impact</Link></li>
            <li><Link href="#">Our Values</Link></li>
            <li><Link href="#">Resources</Link></li>
            <li><Link href="#">Videos</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#18275A]">Information</h4>
          <ul className="text-sm text-gray-600 space-y-4">
            <li><Link href="#">Press Releases</Link></li>
            <li><Link href="#">Mission & Vision</Link></li>
            <li><Link href="#">HR Policies</Link></li>
            <li><Link href="#">Employee Portal</Link></li>
            <li><Link href="#">Health & Safety</Link></li>
            <li><Link href="#">Employee Benefits</Link></li>
          </ul>
        </div>

        {/* Recruitment */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#18275A]">Recruitment</h4>
          <ul className="text-sm text-gray-600 space-y-4">
            <li><Link href="#">Help Desk</Link></li>
            <li><Link href="#">IT Support</Link></li>
            <li><Link href="#">Campus Recruitment</Link></li>
            <li><Link href="#">Job Openings</Link></li>
            <li><Link href="#">Application Process</Link></li>
            <li><Link href="#">Internship Programs</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-12 border-t pt-6 text-[#18275A]">
        &copy; 2025 Aptitood. All Rights Reserved.
      </div>
    </footer>
  );
}