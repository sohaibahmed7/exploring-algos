import React from 'react'
import banner from '../assets/home-banner.svg'
import { Link } from 'react-router-dom'
import { navigation } from '../data'

export const Home = () => {
  return (
    <>
    <section className='block md:flex pt-8 md:pt-4 px-6 md:px-12 lg:px-20 items-center'>
      <div className='container'>
          <h1 className='text-center md:text-left text-3xl md:text-4xl lg:text-7xl'>Exploring Algorithms</h1>
          <p className='text-center md:text-left pt-4 lg:text-lg'>
            The universe of algorithms is fascinating! We see algorithms not only in computer science but also all over other fields. This site features and in-depth exploration of various algorithms, and we discuss their purpose, base implementation, and applications. In addition, we'll compare similar algorithms and showcase the results of experiments that allow for a better understanding of the strengths and weaknesses that each algorithm has. By comparing and contrasting various algorithms, we'll gain a better appreciation for these fundamental concepts of computer science.
          </p>
      </div>
      <div className='mx-auto w-52 md:w-5/12 md:h-3/4'>
          <img src={banner} alt="Home page banner" />
      </div>
    </section>
    <section>
      <div className='px-6 md:px-12 lg:px-20'>
        <h3 className='text-center text-2xl lg:text-4xl pb-4 font-semibold md:pt-2 lg:pt-0'>Let's begin exploring!</h3>
        <div className='bg-white drop-shadow-lg rounded-lg p-4 mb-8 md:mb-4 md:flex'>
          {navigation.slice(1).map((item, index) => {
            return (
              <Link to={item.href} className='md:px-2 md:w-1/4 hover:bg-slate-100 duration-150 cursor-pointer rounded-lg' key={index}>
                <img className='mt-2 md:mt-0 mx-auto h-32 md:h-36' src={item.image} alt='N/A' />
                <h5 className='text-center capitalize text-xl lg:text-2xl
                '>{item.name}</h5>
                <p className='text-center text-sm md:text-base mx:4 lg:mx-8'>{item.desc}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}
