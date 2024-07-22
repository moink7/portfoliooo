import React from 'react'
import { CardStack } from '../components/ui/set-1'
import Experience from '@/components/ui/skill-card'

const Technologies = () => {
  return (
    <div className='py-12 bg-black' id='technologies'>
        <div className=' flex flex-col items-center justify-center'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white justify-center underline underline-offset-8 decoration-primary'>Technologies</h2>
            <p className='text-primary py-4 max-w-md font-semibold'>I like to work with...</p>

        </div>
        <Experience />
    </div>
  )
}

export default Technologies