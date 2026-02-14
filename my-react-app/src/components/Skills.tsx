export default function Skills() {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    'Backend': ['Node.js', 'Express', 'Python', 'PostgreSQL'],
    'Tools': ['Git', 'Docker', 'AWS', 'VS Code']
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Skills</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
              <ul className="space-y-2">
                {items.map(skill => (
                  <li key={skill} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
