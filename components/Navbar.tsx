'use client';

import { Playfair_Display, Quicksand } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-quicksand',
});

export default function Navbar() {
  return (
    <nav
      className={`bg-gradient-to-r from-pink-50 to-rose-100 text-rose-900 px-6 py-4 shadow-sm ${quicksand.className}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <h1
            className={`text-2xl md:text-3xl font-semibold text-rose-900 ${playfair.className}`}
          >
            Preksha Gupta
          </h1>
        </Link>

        <div className="flex items-center space-x-6 text-sm md:text-base">
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
            className="hover:text-rose-600 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
