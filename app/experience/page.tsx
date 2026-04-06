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

        {/* TA 2 */}
        <div className="bg-rose-50 rounded-2xl p-6 shadow-md mb-6 border border-rose-200">
          <h2 className="text-2xl font-semibold text-rose-900">
            Technology Analyst 2 – Citi India
          </h2>
          <p className="text-rose-700 text-sm mb-2">
            Core Accounts | July 2025 – Present
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-medium">Tech Stack:</span> Java, Spring Boot,
            Apache Camel, MCP, LLM
          </p>

          <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
            {[
              "Led migration of multiple services from Red Hat Fuse to Apache Camel 4, improving reliability and security.",
              "Built an agent using MCP and LLM for enterprise-wide React and Angular UI generation with 100% compliance to company UI standards, reducing development timelines by 75%.",
              "Won Citi’s internal Prompt-a-thon among 100+ participants for end-to-end prompt solutions including JIRA story creation, full-stack development, and automated test case generation.",
              "Optimised system uptime and data flow by transitioning the system from Lightspeed Classic to Enterprise.",
              "Owned production support for critical backend applications and deployment validation to ensure high system reliability.",
            ].map((item, index) => (
              <li key={index} className="flex gap-2 items-start">
                <span className="text-pink-600 mt-0.5">🌸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* TA 1 */}
        <div className="bg-rose-50 rounded-2xl p-6 shadow-md mb-6 border border-rose-200">
          <h2 className="text-2xl font-semibold text-rose-900">
            Technology Analyst 1 – Citi India
          </h2>
          <p className="text-rose-700 text-sm mb-2">
            Global Credit Control System | July 2024 – June 2025
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-medium">Tech Stack:</span> Spring Boot,
            React.js, SQL
          </p>

          <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
            {[
              "Engineered a full-stack migration tool in React and Spring Boot to automate data and rule transfer between environments, reducing manual effort by 60%.",
              "Migrated .NET microservices to Spring Boot, significantly improving system performance and scalability.",
              "Built a Java-based Git utility tool using Spring Boot to analyze repositories and generate code change reports.",
              "Performed daily UAT monitoring by validating scheduled jobs, troubleshooting discrepancies, and ensuring smooth operations.",
            ].map((item, index) => (
              <li key={index} className="flex gap-2 items-start">
                <span className="text-pink-600 mt-0.5">🌸</span>
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
          <p className="text-rose-700 text-sm mb-2">
            Equities | May 2023 – August 2023
          </p>
          <p className="text-gray-800 mb-4">
            <span className="font-medium">Tech Stack:</span> Java, Spring Boot,
            Solace
          </p>

          <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
            {[
              "Developed a real-time performance tracking system to monitor latency, throughput, and processing volume.",
              "Optimized Solace connections to ensure reliable and secure data reception across multiple instances.",
            ].map((item, index) => (
              <li key={index} className="flex gap-2 items-start">
                <span className="text-yellow-500 mt-0.5">💫</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}