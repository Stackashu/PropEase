import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import About from './components/About/About'
import SideTray from './components/navbar/SideTray'
import Client from './components/Client/Client'
import Services from './components/services/Services'

const App = () => {

  

  return (
    <div>
      <Navbar  />
      {/* <SideTray trayOpen={trayOpen} setTrayOpen={setTrayOpen}/> */}
      <Hero/>
      <About/>
      <Client/>
      <Services />
    </div>
  )
}

export default App
