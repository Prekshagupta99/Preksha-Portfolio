"use client";

import { Dancing_Script, Quicksand } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-quicksand",
});

export default function EducationPage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 text-gray-900 px-6 py-12 ${quicksand.className}`}
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className={`text-4xl font-bold mb-8 border-b border-rose-300 pb-2 text-rose-900 ${dancingScript.className}`}
        >
          Education
        </h1>

        <div className="bg-rose-50 rounded-2xl p-6 shadow-md mb-6 border border-pink-200">
          <h2 className="text-2xl font-semibold text-rose-900">
            Indira Gandhi Delhi Technical University for Women
          </h2>
          <p className="text-rose-700 text-sm mb-2">Delhi, India</p>
          <p className="text-gray-800 mb-1">B.Tech in Information Technology</p>
          <p className="text-rose-700 text-sm">2020–2024</p>
          <p className="text-gray-900 mt-2">
            CGPA: <span className="font-semibold">9.12</span>
          </p>
        </div>

        <div className="bg-rose-50 rounded-2xl p-6 shadow-md mb-6 border border-pink-200">
          <h2 className="text-2xl font-semibold text-rose-900">CRP School</h2>
          <p className="text-rose-700 text-sm mb-2">Delhi, India</p>
          <p className="text-gray-800 mb-1">CBSE – Senior Secondary (12th)</p>
          <p className="text-rose-700 text-sm">2018–2020</p>
        </div>

        <div className="bg-rose-50 rounded-2xl p-6 shadow-md border border-pink-200">
          <h2 className="text-2xl font-semibold text-rose-900">Model School</h2>
          <p className="text-rose-700 text-sm mb-2">Rohtak, Haryana</p>
          <p className="text-gray-800 mb-1">CBSE – Secondary (10th)</p>
          <p className="text-rose-700 text-sm">2017–2018</p>
        </div>
      </div>
    </div>
  );
}
