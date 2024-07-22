"use client"
import Contact from '@/pages/Contact'
import Hero from '@/pages/Hero'
import NavbarDemo from '@/pages/NavbarDemo'
import Projects from '@/pages/Projects'
import Technologies from '@/pages/Technologies'

import '@fontsource/inter';


import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Backupp = () => {
  return (
    <BrowserRouter>
    <div id='redir'>
        <NavbarDemo />
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
        
    </div>
    </BrowserRouter>
  )
}

export default Backupp