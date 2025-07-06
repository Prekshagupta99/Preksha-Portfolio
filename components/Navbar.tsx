'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/"> <h1 className="text-2xl font-bold">Preksha Gupta</h1></Link>
        <div className="space-x-6 text-sm md:text-base">
          <Link href="/" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/education" className="hover:text-blue-400 transition">
            Education
          </Link>
          <Link href="/experience" className="hover:text-blue-400 transition">
            Experience
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          
        </div>
      </div>
    </nav>
  );
}
