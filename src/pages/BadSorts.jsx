import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { exp_code, bad_sorts } from '../content/implementations'
import { bs_intro, bs_sorts, bs_exps, bs_conclusion } from '../content/bs_content'
import badsorts_exp1 from "../assets/badsorts_exp1.png"
import badsorts_exp2 from "../assets/badsorts_exp2.png"

export const BadSorts = () => {
  return (
    <>
    <div className='w-10/12 mx-auto md:p-4 md:bg-white md:w-4/5 md:drop-shadow-lg md:rounded-lg lg:w-2/4 my-12'>
        {/* INTRO */}
        <h1 className='text-4xl md:text-5xl'>Bad Sorts</h1>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_intro[0]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_intro[1]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_intro[2]}
        </p>
        {/* BUBBLE SORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>Bubble Sort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_sorts[3]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {bad_sorts[0]}
          </SyntaxHighlighter>
        </div>
        {/* INSERTION SORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>Insertion Sort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_sorts[0]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {bad_sorts[1]}
          </SyntaxHighlighter>
        </div>
        {/* SELECTION SORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>Selection Sort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_sorts[2]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {bad_sorts[2]}
          </SyntaxHighlighter>
        </div>
        {/* EXPERIMENT SUITE */}
        <h2 className='text-2xl md:text-3xl mt-2'>Experiment Suite</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_exps[0]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
              {exp_code[0]}
          </SyntaxHighlighter>
        </div>
        <img className='mx-auto h-3/4 w-3/4 lg:h-3/5 lg:w-3/5' src={badsorts_exp1} alt="badsorts experiment 1" />
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_exps[1]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_exps[2]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
           {bs_exps[3]}
        </p>
        <ul className='px-8 md:px-12 list-disc text-slate-600 text-sm md:text-lg lg:text-xl'>
          <li>{bs_exps[4]}</li>
          <li>{bs_exps[5]}</li>
          <li>{bs_exps[6]}</li>
        </ul>
        <img className='mx-auto h-3/4 w-3/4 lg:h-3/5 lg:w-3/5' src={badsorts_exp2} alt="badsorts experiment 2" />
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_exps[7]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_exps[8]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_exps[9]}
        </p>
        <ul className='px-8 md:px-12 list-disc text-slate-600 text-sm md:text-lg lg:text-xl'>
          <li>{bs_exps[10]}</li>
          <li>{bs_exps[11]}</li>
        </ul>
        {/* CONCLUSIONS */}
        <h2 className='text-2xl md:text-3xl mt-2'>Conclusions</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_conclusion[0]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {bs_conclusion[1]}
        </p>
        <div className='w-2/12 md:w-1/12 mt-2 bg-red-500 text-center text-sm rounded-md text-white'>
          <a href="#top">To top</a>
        </div>
    </div>
    </>
  )
}
