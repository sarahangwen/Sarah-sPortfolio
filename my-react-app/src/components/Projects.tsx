import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'ICPAU Audit Management System',
      description: 'AI-powered audit management system for Ugandan Small and Medium Practices (SMPs)',
      tech: ['React', 'TypeScript', 'AI Integration'],
      github: 'https://github.com/ICPAU/audit-portal.git',
      demo: '#',
      period: 'June – December 2025',
      role: 'Frontend Developer '
    },
    {
      title: 'KGL Management System',
      description: 'Full-stack management system for Karibu Groceries Ltd',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/sarahangwen/final_project.git',
      demo: '#',
      period: 'February – May 2025',
      role: 'Full-Stack Developer'
    }
  ];

  return (
    <section id="projects" className="relative bg-[hsl(0,0%,8%)] text-[hsl(0,0%,95%)] py-24">
      <div className="absolute top-0 left-0 w-16 h-2 bg-[hsl(15,90%,55%)]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h2 className="text-[clamp(4rem,12vw,9rem)] font-black leading-[0.9] tracking-tight mb-12">
          PROJECTS.
        </h2>

        <div className="w-full h-[3px] bg-[hsl(0,75%,45%)] mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-[hsl(0,0%,20%)] rounded-sm p-6 hover:border-[hsl(15,90%,55%)] transition-colors">
              <div className="mb-3">
                <h3 className="text-xl font-semibold mb-1 text-[hsl(0,0%,95%)]">{project.title}</h3>
                <p className="text-xs text-[hsl(15,90%,55%)] font-semibold">{project.role}</p>
                <p className="text-xs text-[hsl(0,0%,50%)]">{project.period}</p>
              </div>
              <p className="text-[hsl(0,0%,60%)] mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-[hsl(15,90%,55%)] text-[hsl(0,0%,8%)] px-3 py-1 rounded-sm text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[hsl(0,0%,40%)] hover:text-[hsl(15,90%,55%)] transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.demo} className="text-[hsl(0,0%,40%)] hover:text-[hsl(15,90%,55%)] transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
