import { experiences, projects, links } from "./constant";

function App() {
  return (
    <div className="py-4 px-6">
      <div className="mb-20 w-full flex flex-row justify-end gap-4">
        {links.map((link) => (
          <a href={link.href} target="_blank" key={link.href}>
            <img src={link.logo} />
          </a>
        ))}
      </div>
      <div className="max-w-2xl mx-auto ">
        <h1 className="text-3xl font-semibold">Hey 👋, I'm a Pooja</h1>
        <p className="mt-4 text-white/80">
          I'm a frontend developer based in India. Currently working at{"  "}
          <a
            href="https://ellenox.com"
            className="text-white border-b border-b-white"
          >
            ellenox
          </a>
          . I like building beautiful and user-friendly websites.
        </p>

        <div className="mt-16">
          <h1 className="text-2xl font-semibold">Exprience</h1>
          <div className="flex flex-col gap-2 mt-4">
            {experiences.map((exp) => (
              <div
                className="py-4 border-b border-b-white/20 border-dashed"
                key={exp.company}
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <a className="text-lg" href={exp.site}>
                        {exp.company}
                      </a>
                      <p className="text-sm font-medium text-white/50">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-white/50">{exp.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h1 className="text-2xl font-semibold">Projects</h1>
          <div className="flex flex-col gap-2 mt-4">
            {projects.map((project) => (
              <a href={project.site} target="_blank" key={project.name}>
                <div
                  className="py-4 border-b border-b-white/20 border-dashed hover:border-b-white/80 duration-200"
                  key={project.name}
                >
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={project.logo}
                      alt={project.company}
                      className="h-10 w-10 rounded-full object-contain"
                    />
                    <div>
                      <h2 className="text-lg" href={project.site}>
                        {project.name}
                      </h2>
                      <p className="text-sm font-medium text-white/50">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer>
        <p className="text-center text-white/50 mt-20 text-sm">
          Build with ❤️ by Pooja
        </p>
      </footer>
    </div>
  );
}

export default App;
