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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Experience</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-blue-600 font-medium">{exp.company}</p>
              <p className="text-gray-500 mb-2">{exp.period}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
