import React from 'react'
import { Link } from 'react-router-dom'
import { navigation } from '../data'

export const Nav = () => {
  return (
    <nav className='bg-[#3DA5D9] text-[#FCFCFC] h-12 flex'>
      <ul className='flex mx-auto space-x-8 h-full text-[20px] capitalize items-center'>
        {navigation.map((item, index) => {
          return (
            <li className= 'hover:text-black duration-150' key={index}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
