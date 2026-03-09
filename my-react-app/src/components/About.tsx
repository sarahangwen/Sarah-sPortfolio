import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-[hsl(0,0%,8%)] text-[hsl(0,0%,95%)] min-h-screen py-24">
      <div className="absolute top-0 right-0 w-16 h-2 bg-[hsl(15,90%,55%)]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h2 className="text-[clamp(4rem,12vw,9rem)] font-black leading-[0.9] tracking-tight mb-12">
          ABOUT.
        </h2>

        <div className="w-full h-[3px] bg-[hsl(0,75%,45%)] mb-10" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg md:text-xl font-semibold text-[hsl(0,0%,90%)] mb-6 leading-relaxed">
              I'm a passionate software engineer with a strong foundation in full-stack development
              and a proven track record of building scalable, user-centric applications. With expertise
              in modern web technologies and cloud platforms, I thrive on solving complex problems and
              delivering high-quality solutions.
            </p>
            <p className="text-sm text-[hsl(0,0%,60%)] leading-relaxed mb-5">
              My journey in software development began with a curiosity for how things work, which evolved
              into a career focused on creating impactful digital experiences. I'm committed to continuous
              learning, staying current with industry trends, and applying best practices in every project.
            </p>
            <p className="text-sm text-[hsl(0,0%,60%)] leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, mentoring aspiring
              developers, or exploring new technologies that push the boundaries of what's possible.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 border border-[hsl(0,0%,20%)] rounded-sm hover:border-[hsl(15,90%,55%)] transition-colors">
              <div className="p-3 bg-[hsl(15,90%,55%)] rounded-sm">
                <Code2 className="w-6 h-6 text-[hsl(0,0%,8%)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(0,0%,95%)]">Clean Code Advocate</h3>
                <p className="text-sm text-[hsl(0,0%,60%)]">
                  Writing maintainable, well-documented code that follows industry best practices and design patterns.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-[hsl(0,0%,20%)] rounded-sm hover:border-[hsl(15,90%,55%)] transition-colors">
              <div className="p-3 bg-[hsl(15,90%,55%)] rounded-sm">
                <Rocket className="w-6 h-6 text-[hsl(0,0%,8%)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(0,0%,95%)]">Innovation Driven</h3>
                <p className="text-sm text-[hsl(0,0%,60%)]">
                  Constantly exploring cutting-edge technologies and implementing innovative solutions to drive results.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-[hsl(0,0%,20%)] rounded-sm hover:border-[hsl(15,90%,55%)] transition-colors">
              <div className="p-3 bg-[hsl(15,90%,55%)] rounded-sm">
                <Users className="w-6 h-6 text-[hsl(0,0%,8%)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(0,0%,95%)]">Team Collaborator</h3>
                <p className="text-sm text-[hsl(0,0%,60%)]">
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
