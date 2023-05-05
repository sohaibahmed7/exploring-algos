import React from 'react'

import wip from '../assets/wip.svg'

export const Spa = () => {
  return (
    <div className='w-2/3 md:w-1/2 mx-auto mt-12'>
      <img src={wip} alt="work in progress" />
      <h1 className='text-center text-2xl md:text-4xl'>Work in progress!</h1>
    </div>
  )
}
