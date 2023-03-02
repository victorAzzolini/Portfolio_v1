import './App.css'

import Contacts from './components/contacts/Contacts'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/home/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'



function App() {

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  )
}

export default App
