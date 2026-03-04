export default function Skills() {
  const skills = {
    'Frontend': ['HTML5', 'CSS3', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    'Backend': ['Node.js', 'Express.js', 'NestJS'],
    'Database': ['MongoDB', 'Mongoose', 'PostgreSQL'],
    'Tools & Technologies': ['Git', 'GitHub', 'Trello', 'Figma'],
    'Concepts': ['CRUD Operations', 'RBAC', 'Business Logic', 'Inventory Management'],
    'Deployment & DevOps': ['Docker', 'GitHub Actions', 'DigitalOcean'],
  };

  return (
    <section id="skills" className="relative bg-[hsl(0,0%,8%)] text-[hsl(0,0%,95%)] py-24">
      {/* Orange accent bar top-left */}
      <div className="absolute top-0 left-0 w-16 h-2 bg-[hsl(15,90%,55%)]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h2 className="text-[clamp(4rem,12vw,9rem)] font-black leading-[0.9] tracking-tight mb-12">
          SKILLS.
        </h2>

        <div className="w-full h-[3px] bg-[hsl(0,75%,45%)] mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border border-[hsl(0,0%,20%)] p-8 rounded-sm hover:border-[hsl(15,90%,55%)] transition-colors"
            >
              <h3 className="text-xl font-bold text-[hsl(15,90%,55%)] mb-6 tracking-wide uppercase">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map(skill => (
                  <li key={skill} className="text-sm text-[hsl(0,0%,60%)]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
