
import Landing from './components/landing'
import About from './components/About-us'
import Service from './components/service'
import Footer from './components/footer'
import Teachersinfo from './components/Teachersinfo'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
function App() {
   const lenisRef = useRef()
  
  useEffect(() => {
  let rafId;

  const update = (time) => {
    lenisRef.current?.lenis?.raf(time);
    rafId = requestAnimationFrame(update); 
  };

  rafId = requestAnimationFrame(update);

  return () => cancelAnimationFrame(rafId);
}, []);


  return (
    <>
<ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Landing/>
      <About/>
      <Teachersinfo/>
      <Service/>
      <Footer/>
    </>
  )
}

export default App
