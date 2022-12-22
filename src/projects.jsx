import { useState } from "react";

const Projects = () => {

const [projcts, setProjects] = useState([
    { 
        name: 'Foodie',
        description: 'Foodie is a recipe app that allows users to search and filter through a vast collection of recipes from various cuisines. Built using NextJS and TailwindCSS',
        demo: 'https://foodie-navy.vercel.app/',
        code: 'https://github.com/poojabela/foodie',
        id: 1
    },
    { 
        name:'Liva',
        description: 'Liva is a link shortening app that is built using Next.js',
        demo: 'https://liva-auth.netlify.app',
        code: 'https://github.com/poojabela/liva-auth',
        id: 2
    }, 
])

    return ( 
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-container">
                { projcts.map(project => (
                    <div className="project" key={ project.id }>
                        <h3>{ project.name }</h3>
                        <p>{ project.description }</p>
                        <div className="links">
                            <a href={ project.demo } target="_blank">Live Demo</a>
                            <a href={ project.code } target="_blank">Source Code</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default Projects;    