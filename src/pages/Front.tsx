"use client"
import { WavyBackground } from "../components/ui/wavy-background";
import { BsArrowDownShort } from "react-icons/bs";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FaArrowRight } from "react-icons/fa6";

import { useSearchParams } from "next/navigation";
import { NavHashLink as Link } from "react-router-hash-link";




import Contact from '@/pages/Contact'
import Hero from '@/pages/Hero'
import NavbarDemo from '@/pages/NavbarDemo'
import Projects from '@/pages/Projects'
import Technologies from '@/pages/Technologies'

import '@fontsource/inter';


import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const page = () => {

  return (
    <BrowserRouter>
    <div>
    
        <NavbarDemo />
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
        
    </div>
    </BrowserRouter>
  )
}

export default page