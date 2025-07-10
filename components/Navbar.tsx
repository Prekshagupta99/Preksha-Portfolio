'use client';

import { Menu, X } from 'lucide-react';
import { Quicksand } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-quicksand',
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-gradient-to-r from-pink-50 to-rose-100 text-rose-900 px-6 py-4 shadow-sm ${quicksand.className}`}
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center relative">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm md:text-base">
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
            className="bg-rose-100 border border-rose-300 text-rose-700 px-3 py-1.5 rounded-md font-medium shadow-sm hover:bg-rose-200 transition"
          >
            Resume
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="absolute right-0 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm flex flex-col items-center px-2">
          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-rose-600 transition"
          >
            About
          </Link>
          <Link
            href="/education"
            onClick={() => setIsOpen(false)}
            className="hover:text-rose-600 transition"
          >
            Education
          </Link>
          <Link
            href="/experience"
            onClick={() => setIsOpen(false)}
            className="hover:text-rose-600 transition"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-rose-600 transition"
          >
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1ISjjKbAwbwFPzh6bHxzykL1BliKlBdRA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-100 border border-rose-300 text-rose-700 px-3 py-1.5 rounded-md font-medium shadow-sm hover:bg-rose-200 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
