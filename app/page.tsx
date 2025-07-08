"use client";

import profilePic from "@/public/profile.jpg";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 text-gray-900 px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-lg text-gray-600 italic">Hello there, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-rose-900">Preksha Gupta</h1>
          <p className="text-md text-gray-700 max-w-xl mx-auto md:mx-0">
            A passionate Full-Stack Developer with experience in Java, Spring Boot, React, SQL, Kafka & Solace. I enjoy building scalable backend systems and intuitive UIs while constantly learning and growing.
          </p>

          <div className="flex justify-center md:justify-start space-x-5 pt-4 text-2xl text-rose-600">
            <a href="https://linkedin.com/in/yourprofile" target="_blank">
              <FaLinkedin className="hover:text-rose-800 transition" />
            </a>
            <a href="https://github.com/yourusername" target="_blank">
              <FaGithub className="hover:text-rose-800 transition" />
            </a>
            <a href="mailto:your.email@example.com">
              <FaEnvelope className="hover:text-rose-800 transition" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={profilePic}
            alt="Preksha Gupta"
            className="rounded-xl border-4 border-rose-200 shadow-lg object-cover"
            width={240}
            height={240}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold border-b border-pink-400 pb-2 text-pink-900">
          About Me
        </h2>
        <p className="leading-relaxed text-gray-800 text-md">
          I'm a software engineer with experience in building scalable backend systems,
          intuitive frontend interfaces, and automating development workflows.
          Over the past year, I’ve worked extensively with Java, Spring Boot, React, SQL,
          Kafka, and Solace in real-world projects at Citi. I'm constantly learning
          and looking for new challenges.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold border-b border-pink-400 pb-2 text-pink-900">
          Technical Skills
        </h2>

        <div className="space-y-4 text-gray-800 text-md">
          <div>
            <h3 className="font-medium text-pink-800">Programming Languages:</h3>
            <p className="ml-2 mt-1">Java, C++, JavaScript</p>
          </div>

          <div>
            <h3 className="font-medium text-pink-800">Web Technologies:</h3>
            <p className="ml-2 mt-1">ReactJs, NextJs, REST APIs</p>
          </div>

          <div>
            <h3 className="font-medium text-pink-800">Frameworks & Databases:</h3>
            <p className="ml-2 mt-1">Spring Boot, SQL, MySQL</p>
          </div>

          <div>
            <h3 className="font-medium text-pink-800">Core Computer Science:</h3>
            <p className="ml-2 mt-1">Operating Systems, DBMS, OOPS, Computer Networks</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-semibold border-b border-pink-400 pb-2 text-pink-900">
          Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 text-md">
          <li>
            Received Recognition Reward at Citi for consistently delivering quality work and supporting team goals.
          </li>
          <li>
            Selected among the top 30 students nationwide for Flipkart GWC 4.0 — invited for a campus visit (2023).
          </li>
          <li>
            Selected among the top 200 students across India for Flipkart GWC 5.0 cohort (2024).
          </li>
          <li>
            Chosen for CWiCS Cisco BOOST 3.0 — a competitive mentorship program focused on Cybersecurity.
          </li>
        </ul>
      </section>
    </div>
  );
}
