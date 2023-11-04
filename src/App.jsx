import { useState } from 'react'
import './App.css'
// import component below
import Navbar from './์Nav/Navbar'
import Hero from './Hero/Hero'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Main/>
     <Footer/>
    </>
  )
}

export default App
