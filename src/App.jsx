import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import { useState } from 'react'

function App() {

  return (
    <main>
        <div>
          <Navbar/>
          <section id='home'>
            <Header/>          
          </section>
          <section id='profile'>
            <Profile/>
          </section>
          <section id='projects'>
            <Projects/>
          </section>
        </div>
      </main>
  )
}

export default App
