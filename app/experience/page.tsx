export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b border-rose-300 pb-2 text-rose-900">
          Experience
        </h1>

        {/* Full-time Role */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-6 border border-rose-200">
          <h2 className="text-2xl font-semibold text-rose-900">Technology Analyst – Citi India</h2>
          <p className="text-rose-700 text-sm mb-2">July 2024 – Present</p>
          <p className="text-gray-800 mb-4">
            <span className="font-medium">Tech Stack:</span> Spring Boot, React.js, SQL
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Developed a full-stack migration tool, automating data and rules migration from higher to lower environments, reducing manual effort by 60%.</li>
            <li>Implemented backend services in Java to handle complex migration rules and ensure seamless data transfer.</li>
            <li>Created React.js components for managing migration workflows with a user-friendly UI.</li>
            <li>Migrated legacy .NET microservices to Spring Boot, improving system scalability and performance.</li>
            <li>Built a Git utility tool using Spring Boot to fetch added/removed/total lines of code across repositories using Git commands.</li>
            <li>Performed unit testing to validate code functionality and prevent regressions.</li>
          </ul>
        </div>

        {/* Internship */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-rose-200">
          <h2 className="text-2xl font-semibold text-rose-900">Technology Intern – Citi India</h2>
          <p className="text-rose-700 text-sm mb-2">June – July 2023</p>
          <p className="text-gray-800 mb-4">
            <span className="font-medium">Tech Stack:</span> Spring Boot, Java
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Managed Solace connections, optimizing secure data reception and forwarding across multiple instances.</li>
            <li>Built APIs to transmit data from backend systems to UI, ensuring real-time delivery and seamless interaction.</li>
            <li>Improved data flow reliability and user experience through performance tuning and code optimization.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
