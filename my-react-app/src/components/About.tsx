import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">About Me</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate software engineer with a strong foundation in full-stack development
              and a proven track record of building scalable, user-centric applications. With expertise
              in modern web technologies and cloud platforms, I thrive on solving complex problems and
              delivering high-quality solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My journey in software development began with a curiosity for how things work, which evolved
              into a career focused on creating impactful digital experiences. I'm committed to continuous
              learning, staying current with industry trends, and applying best practices in every project.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, mentoring aspiring
              developers, or exploring new technologies that push the boundaries of what's possible.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Clean Code Advocate</h3>
                <p className="text-gray-600">
                  Writing maintainable, well-documented code that follows industry best practices and design patterns.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="p-3 bg-green-100 rounded-lg">
                <Rocket className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation Driven</h3>
                <p className="text-gray-600">
                  Constantly exploring cutting-edge technologies and implementing innovative solutions to drive results.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Team Collaborator</h3>
                <p className="text-gray-600">
                  Effective communicator who values teamwork, mentorship, and fostering a positive development culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
