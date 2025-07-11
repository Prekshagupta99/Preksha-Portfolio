'use client';

import { Quicksand } from 'next/font/google';
import Link from 'next/link';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-quicksand',
});

export default function Navbar() {
  return (
    <nav
      className={`bg-gradient-to-r from-pink-50 to-rose-100 text-rose-900 px-4 py-3 shadow-sm ${quicksand.className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base">
        <Link href="/#about" className="hover:text-rose-600 transition">
          About
        </Link>
        <Link href="/education" className="hover:text-rose-600 transition">
          Education
        </Link>
        <Link href="/experience" className="hover:text-rose-600 transition">
          Experience
        </Link>
        <Link href="/projects" className="hover:text-rose-600 transition">
          Projects
        </Link>
        <a
          href="https://drive.google.com/file/d/1ISjjKbAwbwFPzh6bHxzykL1BliKlBdRA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose-100 border border-rose-300 text-rose-700 px-3 py-1 rounded-md font-medium shadow-sm hover:bg-rose-200 transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
