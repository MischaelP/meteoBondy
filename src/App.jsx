import { useRef } from 'react'
import useScrollSnap from 'react-use-scroll-snap'
import MeteoCard from './component/MeteoCard'
import Pop from './component/Pop'
import Demographic from './component/Demographic'
import Economics from './component/Economics'
import Contact from './component/Contact'
import Education from './component/Education'

function App() {
  const meteoCardRef = useRef();
  const popRef = useRef();
  const demographicRef = useRef();
  const economicsRef = useRef();
  const educationRef = useRef();
  const contactRef = useRef();

  useScrollSnap({
    ref: useRef,
    children : [
      {ref: meteoCardRef, element: <MeteoCard />},
      {ref: popRef, element: <Pop />},
      {ref: demographicRef, element: <Demographic />},
      {ref: economicsRef, element: <Economics />},
      {ref: educationRef, element: <Education />},
      {ref: contactRef, element: <Contact />},
    ],
  });

  return (
    <>
    
     <div className='h-screen w-screen overflow-scroll'>
        
        <MeteoCard ref={meteoCardRef}/>
        <Pop ref={popRef}/>
        <Demographic ref={demographicRef}/>
        <Economics ref={economicsRef}/>
        <Education ref={educationRef}/>
        <Contact ref={contactRef}/>
      </div>
    </>
  )
}

export default App
