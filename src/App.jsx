import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="mainWrapper h-[100vh] w-[100vw] bg-black">
     <div className='mainWrapper  h-[100vh] max-w-[1400px] mx-auto bg-black'>
      <Navbar/>
      <FirstSection/>
     </div>
   </div>
  )
}

export default App
