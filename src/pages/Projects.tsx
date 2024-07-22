import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import HackerImg from "../../public/project.jpg"
import adminD from "../../public/adminD.png"
import Card from '@mui/joy/Card';

import Experience from '@/components/ui/skill-card'
import Portfolio from '@/components/ui/project-card'



const Projects = () => {
  return (
    <div className='py-12 bg-black' id='projects'>
        <div className=' flex flex-row items-center justify-center'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white justify-center underline underline-offset-9 decoration-primary'>Projects</h2>
        </div>

        <div className='flex flex-row justify-center '>
           <Portfolio />
        </div>
    </div>
  )
}

export default Projects