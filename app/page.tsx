"use client";

import profilePic from "@/public/profile.jpg";
import { Dancing_Script, Quicksand } from "next/font/google";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

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

export default function HomePage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 text-gray-900 px-4 sm:px-6 md:px-8 py-12 space-y-24 ${quicksand.className}`}
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
        {/* Text Content */}
        <div className="flex-1 space-y-6 md:max-w-lg">
          <p
            className={`text-3xl sm:text-4xl text-rose-800 italic ${dancingScript.className}`}
          >
            Hello there, I'm Preksha
          </p>

          <p className="text-sm sm:text-md text-gray-700">
            I’m a full stack developer with one year of experience at Citi,
            where I build reliable backend systems and intuitive frontend
            interfaces using Java, Spring Boot, React, and SQL. I have a strong
            foundation in computer science and a passion for writing clean and
            efficient code. I'm actively exploring opportunities that allow me
            to take on greater technical ownership and contribute to meaningful
            projects.
          </p>

<div className="flex justify-center md:justify-start space-x-5 pt-4 text-2xl">
  <a
    href="https://www.linkedin.com/in/preksha-gupta-701314210/"
    target="_blank"
    className="text-rose-400 hover:text-rose-600 transition"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/Prekshagupta99"
    target="_blank"
    className="text-rose-400 hover:text-rose-600 transition"
  >
    <FaGithub />
  </a>
  <a
    href="mailto:prekshamanglagupta@gmail.com"
    className="text-rose-400 hover:text-rose-600 transition"
  >
    <FaEnvelope />
  </a>
</div>


        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src={profilePic}
            alt="Preksha Gupta"
            className="rounded-2xl border-4 border-rose-200 shadow-lg object-cover"
            width={220}
            height={220}
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto space-y-4 px-2 sm:px-0">
        <h2
          className={`text-3xl font-semibold border-b border-pink-400 pb-2 text-pink-900 ${dancingScript.className}`}
        >
          About Me
        </h2>
        <p className="leading-relaxed text-gray-800 text-sm sm:text-base">
          I have been working with Citi India as a Technology Analyst for the
          past year, contributing to the development of internal platforms,
          backend services, and user-facing tools that have improved operational
          efficiency and engineering workflows. I enjoy working across the
          stack, whether it involves designing scalable APIs, building
          responsive user interfaces, or optimizing data processing for
          performance.
        </p>
        <p className="leading-relaxed text-gray-800 text-sm sm:text-base">
          I am particularly interested in full stack development because it
          allows me to combine backend logic with seamless user experiences. I
          believe in continuous learning, thoughtful engineering, and writing
          code that is both maintainable and impactful. I’m now looking forward
          to my next challenge where I can grow as a developer and work on
          products that make a real difference.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto space-y-6 px-2 sm:px-0">
        <h2
          className={`text-3xl font-semibold border-b border-pink-400 pb-2 text-pink-900 ${dancingScript.className}`}
        >
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
          {/* Programming Languages */}
          <div className="bg-rose-50 rounded-lg border border-pink-200 p-4 shadow-sm">
            <h3 className="font-semibold text-pink-800 mb-2">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "C++", "JavaScript"].map((skill) => (
                <span
                  key={skill}
                  className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm border border-pink-200 shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div className="bg-rose-50 rounded-lg border border-pink-200 p-4 shadow-sm">
            <h3 className="font-semibold text-pink-800 mb-2">
              Web Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {["ReactJs", "NextJs", "REST APIs"].map((skill) => (
                <span
                  key={skill}
                  className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm border border-pink-200 shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Databases */}
          <div className="bg-rose-50 rounded-lg border border-pink-200 p-4 shadow-sm">
            <h3 className="font-semibold text-pink-800 mb-2">
              Frameworks & Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Spring Boot", "SQL", "MySQL"].map((skill) => (
                <span
                  key={skill}
                  className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm border border-pink-200 shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Core CS Concepts */}
          <div className="bg-rose-50 rounded-lg border border-pink-200 p-4 shadow-sm">
            <h3 className="font-semibold text-pink-800 mb-2">
              Core Computer Science
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Operating Systems", "Database Management System", "Object Oriented Programming System", "Computer Network"].map((skill) => (
                <span
                  key={skill}
                  className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm border border-pink-200 shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="max-w-4xl mx-auto space-y-4 px-2 sm:px-0"
      >
        <h2
          className={`text-3xl font-semibold border-b border-pink-400 pb-2 text-pink-900 ${dancingScript.className}`}
        >
          Achievements
        </h2>
        <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
          {[
            "Received Recognition Reward at Citi for consistently delivering quality work and supporting team goals.",
            "Selected among the top 30 students nationwide for Flipkart GWC 4.0 — invited for a campus visit (2023).",
            "Selected among the top 200 students across India for Flipkart GWC 5.0 cohort (2024).",
            "Chosen for CWiCS Cisco BOOST 3.0 — a competitive mentorship program focused on Cybersecurity.",
          ].map((achievement, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-pink-500 text-lg leading-6">🌸</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
