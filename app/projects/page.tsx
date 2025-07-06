export default function ProjectsPage() {
  const projects = [
    {
      name: 'Mehucal',
      description:
        'Developed a business website for Mehucal India LLP featuring a dynamic homepage, categorized product showcase, and contact form. Resulted in a 20% increase in user inquiries within the first month.',
      techStack: ['React', 'CSS', 'JavaScript'],
      link: 'https://www.mehucal.com/',
    },
    {
      name: 'Vibe Studio',
      description:
        'Built a gym website with trainer bios, class schedules, membership plans, and a gallery. Led to a 30% rise in daily visits and 15% increase in sign-ups within the first quarter.',
      techStack: ['React', 'CSS', 'JavaScript'],
      link: 'https://vibestudio.vercel.app/',
    },
    {
      name: 'EUPHONIOUS',
      description:
        'Created an informational website to help users learn about various musical instruments such as bowed strings, keyboards, and guitars.',
      techStack: ['HTML', 'CSS', 'Bootstrap'],
      link: 'https://prekshagupta99.github.io/Euphonious/',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b border-gray-700 pb-2">Projects</h1>

        <div className="space-y-10">
          {projects.map((project) => (
            <div key={project.name} className="bg-gray-900 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-blue-400">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-sm px-3 py-1 rounded-full text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
