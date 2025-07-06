'use client';

export default function HomePage() {
  return (
    <div className="text-white bg-gray-950 min-h-screen px-6 py-10 space-y-24">

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Preksha 👋</h1>
        <p className="text-lg md:text-xl text-gray-300">
          A passionate Full-Stack Developer with a love for Java, Spring Boot & React.
        </p>
      </section>

      {/* About Me */}
      <section id="about" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a software engineer with experience in building scalable backend systems, intuitive frontend interfaces, 
          and automating development workflows. Over the past year, I’ve worked extensively with Java, Spring Boot, React, 
          SQL, Kafka, and Solace in real-world projects at Citi. I'm constantly learning and looking for new challenges.
        </p>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-200 text-sm">
          <span className="bg-gray-800 px-3 py-2 rounded">Java</span>
          <span className="bg-gray-800 px-3 py-2 rounded">Spring Boot</span>
          <span className="bg-gray-800 px-3 py-2 rounded">React</span>
          <span className="bg-gray-800 px-3 py-2 rounded">SQL</span>
          <span className="bg-gray-800 px-3 py-2 rounded">Kafka</span>
          <span className="bg-gray-800 px-3 py-2 rounded">Solace</span>
          <span className="bg-gray-800 px-3 py-2 rounded">Git</span>
          <span className="bg-gray-800 px-3 py-2 rounded">Postman</span>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">Achievements</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Received “Bravo” award at Citi for contributions to automation & migration projects.</li>
          <li>Successfully led a Git automation tool used across multiple teams.</li>
          <li>Completed multiple UAT & Production deployments with 0 rollback.</li>
          <li>Improved backend response time by 40% through query optimizations.</li>
        </ul>
      </section>

    </div>
  );
}
