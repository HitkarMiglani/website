import React from 'react'
import { Spotlight } from './ui/Spotlight'


export const Hero = () => {
  return (

    <div>
      <div className='pb-30 pt-36'>
          <div>
              <Spotlight className='-top-40 -left-10' fill='white' />
              <Spotlight className='top-10 left-20 h-[80vh] w-[20vw] ' fill='purple' />
              <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
              <Spotlight className='-top-40 -left-30' fill='white' />
              <Spotlight className='top-10 left-120 h-[80vh] w-[20vw] ' fill='purple' />
              <Spotlight className='-top-40 -left-30 h-[100vh] w-[50vw]' fill='blue' />
          </div>
      </div>
    </div>
  )
}
