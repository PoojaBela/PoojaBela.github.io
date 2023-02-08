const Skills = () => {
    return ( 
        <div className="grid h-[40vh]">
            <h1 className="text-center text-3xl"><span className="text-5xl">🌈 </span>Skills</h1>
            <div className="flex-col mx-auto md:flex md:flex-row md:justify-between md:mx-0">
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React.js, Next.js</li>
                </ul>
                <ul>
                    <li>TailwindCSS, Styled Components</li>
                    <li>PrismaORM, Firebase</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Skills;