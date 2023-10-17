import { useState } from 'react'
import MeteoCard from './component/MeteoCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-xl font-bold text-center'>Bondy en deux minutes</h1>
     <MeteoCard />
    </>
  )
}

export default App
