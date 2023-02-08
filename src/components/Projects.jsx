const Projects = () => {

    const projects = ([
        {
            name: '📒 NotePal',
            description: 'Notekeeper is a web application for taking and managing notes build using Nextjs and Firebase.',
            demo: 'https://note-pal.vercel.app',
            code: 'https://github.com/poojabela/NotePal',
        },
        {
            name: '🧘‍♀️ FitLife',
            description: 'FitLife is a website that provide range of workout plans build using Nextjs and TailwindCSS.',
            demo: 'https://fit-life-rust.vercel.app',
            code: 'https://github.com/poojabela/fitLife',
        }
    ])

    return ( 
        <section className="projects grid gap-10">
            <h1 className="text-center text-3xl"> <span className="text-5xl">🧰</span> My Projects</h1>
            <div className="project-container grid gap-4 " >
                {projects.map((project, index) => (
                    <div  className="bg-[rgba(255,255,255,0.03)] px-10 py-5 rounded-md hover:bg-[rgba(255,255,255,0.05)] hover:-translate-y-1 ease-in-out duration-300 flex flex-col gap-2 border-[rgba(255,255,255,0.2)] border-[2px]" key={index}>
                        <h1 className="name text-2xl">{project.name}</h1>
                        <p className="text-[#9ba1a6]">{project.description}</p>
                        <div className="icons flex gap-3">
                            <a href={project.code} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> 
                            </a>
                            <a href={project.demo} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default Projects;