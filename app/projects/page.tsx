export default function ProjectsPage() {
  const projects = [
    {
      name: 'EasyLabour',
      description:
        'EasyLabour is a service-based platform designed to connect skilled laborers like painters, electricians, carpenters, and plumbers with potential clients in need of their services. The application enables easy registration for workers, location-based job matching, and a smooth booking experience for users. It aims to promote employment for daily wage workers while providing reliable help for household needs. Built with a scalable backend and an intuitive frontend.',
      techStack: ['Java', 'React', 'MySQL'],
      link: '#',
    },
    {
      name: 'Mehucal',
      description:
        'Developed a full-fledged business website for Mehucal India LLP. The site features a dynamic homepage with animated components, a categorized product showcase with filters, and an interactive contact form integrated with email notifications. The responsive design ensures a seamless experience across devices. Backend integration allowed automated inquiry tracking. The project helped the brand establish an online presence and led to a 20% increase in customer inquiries in the first month.',
      techStack: ['React', 'CSS', 'JavaScript'],
      link: 'https://www.mehucal.com/',
    },
    {
      name: 'Vibe Studio',
      description:
        'Created a modern and engaging gym website that included detailed trainer bios, class schedules updated weekly, membership plans with pricing tiers, and a responsive photo gallery. I implemented smooth navigation and interactive UI to improve user engagement. The backend logic allowed for easy updates to schedules and offers. The project saw a 30% rise in daily traffic and helped convert online visitors into members, increasing sign-ups by 15% in the first quarter.',
      techStack: ['React', 'CSS', 'JavaScript'],
      link: 'https://vibestudio.vercel.app/',
    },
    {
      name: 'Portfolio Website',
      description:
        'This is the personal portfolio website you are currently viewing, designed and developed using modern web technologies. It includes dedicated sections for About, Experience, Projects, Skills, Education, and Achievements. Built using Next.js and Tailwind CSS, it demonstrates my technical skills, project experience, and career journey in a clean, responsive, and professional layout.',
      techStack: ['Next.js', 'React', 'Tailwind CSS'],
      link: 'https://preksha-portfolio-livid.vercel.app/',
    },
    {
      name: 'EUPHONIOUS',
      description:
        'A simple yet informative website aimed at educating users about different musical instruments. Users can browse categories like bowed strings, guitars, and keyboards, each with a dedicated section describing the instrument type, origin, and examples. The site uses Bootstrap for quick layout and responsiveness. This project helped me strengthen my fundamentals in HTML/CSS and improve content structuring with accessible and educational design.',
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
