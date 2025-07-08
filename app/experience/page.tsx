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

export default function ExperiencePage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 text-gray-900 px-6 py-12 ${quicksand.className}`}
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className={`text-4xl font-bold mb-8 border-b border-rose-300 pb-2 text-rose-900 ${dancingScript.className}`}
        >
          Experience
        </h1>

        {/* Full-time Role */}
        <div className="bg-rose-50 rounded-2xl p-6 shadow-md mb-6 border border-rose-200">
          <h2 className="text-2xl font-semibold text-rose-900">
            Technology Analyst – Citi India
          </h2>
          <p className="text-rose-700 text-sm mb-2">July 2024 – Present</p>
          <p className="text-gray-800 mb-4">
            <span className="font-medium">Tech Stack:</span> Spring Boot, React.js, SQL
          </p>
          <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
            {[
              "Developed a full-stack migration tool, automating data and rules migration from higher to lower environments, reducing manual effort by 60%.",
              "Implemented backend services in Java to handle complex migration rules and ensure seamless data transfer.",
              "Created React.js components for managing migration workflows with a user-friendly UI.",
              "Migrated legacy .NET microservices to Spring Boot, improving system scalability and performance.",
              "Built a Git utility tool using Spring Boot to fetch added/removed/total lines of code across repositories using Git commands.",
              "Performed unit testing to validate code functionality and prevent regressions.",
            ].map((item, index) => (
              <li key={index} className="flex gap-2 items-start">
                <span className="text-pink-600 text-base mt-0.5">🌸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Internship */}
        <div className="bg-rose-50 rounded-2xl p-6 shadow-md border border-rose-200">
          <h2 className="text-2xl font-semibold text-rose-900">
            Technology Intern – Citi India
          </h2>
          <p className="text-rose-700 text-sm mb-2">June – July 2023</p>
          <p className="text-gray-800 mb-4">
            <span className="font-medium">Tech Stack:</span> Spring Boot, Java
          </p>
          <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
            {[
              "Managed Solace connections, optimizing secure data reception and forwarding across multiple instances.",
              "Built APIs to transmit data from backend systems to UI, ensuring real-time delivery and seamless interaction.",
              "Improved data flow reliability and user experience through performance tuning and code optimization.",
            ].map((item, index) => (
              <li key={index} className="flex gap-2 items-start">
                <span className="text-yellow-500 text-base mt-0.5">💫</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
