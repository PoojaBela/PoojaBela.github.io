const Header = () => {

    return ( 
        <header className="fixed top-20 z-30 grid w-full grid-cols-[1fr,min(640px,100%),1fr] px-2">
            <div className="header-container col-start-2 rounded-[8px] px-4 py-2.5  backdrop-blur bg-[rgba(255,255,255,0.03)]">
                <ul className="flex items-center justify-around">
                    <a href="https://github.com/poojabela" target="_blank" className="flex flex-col items-center gap-2 cursor-pointer sm:flex-row">
                        <div className="bg-[linear-gradient(-33deg,_#FFB6C1_5%,_#FFDAB9_50%,_#ADD8E6)] p-1 rounded-md hover:scale-105 ease-in-out duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github stroke-[#0a0a0a]"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> 
                        </div>
                        <p className="font-medium text-sm">GitHub</p>
                    </a>
                    <a href="https://twitter.com/PBelaramani" target="_blank" className="flex flex-col items-center gap-2 cursor-pointer sm:flex-row">
                        <div className="bg-[linear-gradient(-33deg,_#FFB6C1_5%,_#FFDAB9_50%,_#ADD8E6)] p-1 rounded-md hover:scale-105 ease-in-out duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter stroke-[#0a0a0a]"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </div>
                        <p className="font-medium text-sm">Twitter</p>
                    </a>
                    <a href="" target="_blank" className="flex flex-col items-center gap-2 cursor-pointer sm:flex-row">
                        <div className="bg-[linear-gradient(-33deg,_#FFB6C1_5%,_#FFDAB9_50%,_#ADD8E6)] p-1 rounded-md hover:scale-105 ease-in-out duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin stroke-[#0a0a0a]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>                        
                        </div>
                        <p className="font-medium text-sm">LinkedIn</p>
                    </a>
                    <a href="mailto:poojabelaramani51@gmail.com" target="_blank" className="flex flex-col items-center gap-2 cursor-pointer sm:flex-row">
                        <div className="bg-[linear-gradient(-33deg,_#FFB6C1_5%,_#FFDAB9_50%,_#ADD8E6)] p-1 rounded-md hover:scale-105 ease-in-out duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail stroke-[#0a0a0a]"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <p className="font-medium text-sm">Gmail</p>
                    </a>
                </ul>
            </div>
        </header>
     );
}
 
export default Header;