import Container from './container';
import Projects from './projects';
import Footer from './footer';
import Skills from './skills';
import { useEffect } from 'react';
import Header from './header';

function App() {
  useEffect(() => {
    const themeInLS = localStorage.getItem("theme");
    if (themeInLS && ["light", "dark"].includes(themeInLS)) {
      document.body.setAttribute("data-theme", themeInLS);
    } else {
      localStorage.setItem("theme", "dark")
      document.body.setAttribute("data-theme", "dark");
    }
  }, [])

  return ( 
    <div> 
      <Header />
      <main >
        <Container />
        <Skills />
        <Projects />
      </main>
      <Footer />
   </div> 
  )
}

export default App
