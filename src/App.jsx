import MeteoCard from './component/MeteoCard'
import Pop from './component/Pop'
import Demographic from './component/Demographic'
import Economics from './component/Economics'
import Contact from './component/Contact'
import Education from './component/Education'

function App() {
  

  return (
    <>
     <h1 className='text-3xl font-bold text-center pb-4 pt-4 bg-pink-500'>Bondy en deux minutes</h1>
     <MeteoCard />
     <Pop />
     <Demographic />
     <Economics />
     <Education />
     <Contact />
    </>
  )
}

export default App
