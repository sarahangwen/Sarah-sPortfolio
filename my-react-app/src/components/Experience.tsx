export default function Experience() {
  const experiences = [
    {
      title: 'Junior Software Engineer(Internship)',
      company: 'Institute Of Certified Public Accountants Of Uganda',
      period: '2025 - 2026',
      description: 'Led development of scalable web applications using React and Node.js.'
    },
    {
      title: 'Software Engineer',
      company: 'My Personal Projects',
      period: '2025',
      description: 'Built and maintained full-stack applications with modern technologies.'
    }
  ];

  return (
    <section id="experience" className="relative bg-[hsl(0,0%,8%)] text-[hsl(0,0%,95%)] py-24">
      <div className="absolute top-0 right-0 w-16 h-2 bg-[hsl(15,90%,55%)]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h2 className="text-[clamp(4rem,12vw,9rem)] font-black leading-[0.9] tracking-tight mb-12">
          EXPERIENCE.
        </h2>

        <div className="w-full h-[3px] bg-[hsl(0,75%,45%)] mb-12" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-[hsl(15,90%,55%)] pl-6">
              <h3 className="text-2xl font-semibold text-[hsl(0,0%,95%)]">{exp.title}</h3>
              <p className="text-[hsl(15,90%,55%)] font-medium">{exp.company}</p>
              <p className="text-[hsl(0,0%,50%)] mb-2">{exp.period}</p>
              <p className="text-[hsl(0,0%,60%)]">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
