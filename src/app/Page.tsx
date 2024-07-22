"use client"



import dynamic from 'next/dynamic'
import React from 'react'
import {Suspense} from "react";


const Front = dynamic(
  () => import('@/pages/Front'),
  { ssr: false }
)



const Page = () => {
  return (
    <>
    <Suspense fallback={<>Loading...</>}>
      <Front />
    </Suspense>
      
    </>
    
    
  )
}

export default Page