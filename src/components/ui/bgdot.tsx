import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

import HeroImg from "../../../public/ani1.png"
import { HoverBorderGradient } from "./hover-border-gradient";
import Link from "next/link";

export function BgDot() {
  return (
    
    <div className="h-[40rem] w-full bg-black bg-dot-white/[0.2]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      
      <div className='h-screen w-full '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white '>I'm a Full Stack Developer</h2>
            <p className='text-gray-400 py-4 max-w-md'>I'm a 19 year old studying EXTC engineering and an ambitious developer who likes to build modern web applications using technologies like Express, Node, React, Mongo while also being experienced in various libraries and frameworks related to it.</p>
            
            <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-white flex items-center space-x-2"
            >
                <Link href='' className="flex items-center">
                    Resume
                    <span>
                        <FaArrowRight />
                    </span>
                </Link>
                    
            </HoverBorderGradient>
        </div>
        
        <div>
          <Image src= {HeroImg} alt="profile" className='rounded-2xl mx-auto w-1/3 md:w-3/4'/>
        </div>
        </div>
    </div>
    </div>
  );
}
