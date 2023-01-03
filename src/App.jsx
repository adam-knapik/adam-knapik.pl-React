import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <div>
        <Header />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
