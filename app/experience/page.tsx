export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b border-gray-700 pb-2">Experience</h1>

        {/* Full-time Role */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg mb-6">
          <h2 className="text-2xl font-semibold">Technology Analyst – Citi India</h2>
          <p className="text-gray-400 text-sm mb-2">July 2024 – Present</p>
          <p className="text-gray-300 mb-4">Tech Stack: <span className="text-gray-200 font-medium">Spring Boot, React.js, SQL</span></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Developed a full-stack migration tool reducing manual effort by 60%.</li>
            <li>Built backend services in Java to manage complex migration rules.</li>
            <li>Created React.js UI for managing migration workflows.</li>
            <li>Built a Git utility tool using Spring Boot to calculate code changes across repos.</li>
            <li>Performed daily UAT monitoring and bug fixing for smooth production delivery.</li>
          </ul>
        </div>

        {/* Internship */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold">Technology Intern – Citi India</h2>
          <p className="text-gray-400 text-sm mb-2">June – July 2023</p>
          <p className="text-gray-300 mb-4">Tech Stack: <span className="text-gray-200 font-medium">Spring Boot, Java</span></p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Managed Solace connections for secure and reliable data flow.</li>
            <li>Built APIs for real-time data transmission between backend and UI systems.</li>
            <li>Improved data delivery and user experience through API optimization.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
