import Header from "./components/Header";
import HeroSection from "./components/Hero"
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return ( 
    <div className="pb-10">
      <svg className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light" width="100%" height="100%"><filter id="pedroduarteisalegend"><feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence></filter><rect width="100%" height="100%" filter="url(#pedroduarteisalegend)"></rect></svg>
      <div className="design-1 w-[200px] h-[200px] bg-[#FFB6C1] blur-[100px] fixed top-0  right-0 z-[-1] animate-colorloop"></div>
      <div className="design-2 w-[200px] h-[200px] bg-[#E6E6FA] blur-[100px] fixed bottom-0 z-[-1] animate-colorloop2"></div>
      <main className="">
        <Header />
        <div className="mx-auto flex w-[min(640px,_100%)] flex-col items-stretch px-4 pt-[290px] gap-12 pb-20 md:pt-[250px]">
          <HeroSection />
          <Skills />
          <Projects />
        </div>
        <Footer />
      </main>
  </div>
  )
}

export default App
