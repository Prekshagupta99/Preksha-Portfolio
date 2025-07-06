"use client";

export default function HomePage() {
  return (
    <div className="text-white bg-gray-950 min-h-screen px-6 py-10 space-y-24">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Preksha 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          A passionate Full-Stack Developer with a love for Java, Spring Boot &
          React.
        </p>
      </section>

      <section id="about" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a software engineer with experience in building scalable backend
          systems, intuitive frontend interfaces, and automating development
          workflows. Over the past year, I’ve worked extensively with Java,
          Spring Boot, React, SQL, Kafka, and Solace in real-world projects at
          Citi. I'm constantly learning and looking for new challenges.
        </p>
      </section>

      <section id="skills" className="max-w-4xl mx-auto">
  <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">Technical Skills</h2>

  <div className="space-y-4 text-gray-300 text-sm">
    <div>
      <h3 className="font-medium text-white">Programming Languages:</h3>
      <p className="ml-2 mt-1">Java, C++, JavaScript</p>
    </div>

    <div>
      <h3 className="font-medium text-white">Web Technologies:</h3>
      <p className="ml-2 mt-1">ReactJs, NextJs, REST APIs</p>
    </div>

    <div>
      <h3 className="font-medium text-white">Frameworks & Databases:</h3>
      <p className="ml-2 mt-1">Spring Boot, SQL, MySQL</p>
    </div>

    <div>
      <h3 className="font-medium text-white">Core Computer Science:</h3>
      <p className="ml-2 mt-1">Operating Systems, DBMS, OOPS, Computer Networks</p>
    </div>
  </div>
</section>


      <section id="achievements" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Received Recognition Reward at Citi for consistently delivering
            quality work and supporting team goals.
          </li>
          <li>
            Selected among the top 30 students nationwide for Flipkart GWC 4.0 —
            invited for campus visit.
          </li>
          <li>
            Selected among the top 200 students across India for Flipkart GWC
            5.0 cohort.
          </li>
          <li>
            Chosen for CWiCS Cisco BOOST 3.0 — a competitive mentorship program
            focused on Cybersecurity.
          </li>
        </ul>
      </section>
    </div>
  );
}
