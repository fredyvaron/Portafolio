import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './Component/Home'
import Nav from './Component/Nav'
import Footer from './Component/Foote'
import Proyectos from './Component/Proyectos'
import Contacteme from './Component/Contacteme'
import Skill from './Component/Skill'
import Sobremi from './Component/Sobremi'

function App() {
  return (
  <div className="App dark:bg-gray-900">
    <Nav/>

<Home/>
<Sobremi/>
<Skill/>
<Proyectos/> 
<Contacteme/>
<Footer/>
  </div>
  )
}

export default App
