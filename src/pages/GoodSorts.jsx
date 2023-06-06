import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { good_sorts, heap_demo } from '../content/implementations'
import { gs_intro, gs_sorts, gs_exps, gs_conclusions } from '../content/gs_content'
import goodsorts_exp1 from "../assets/goodsorts_exp1.png"
import goodsorts_exp2 from "../assets/goodsorts_exp2.png"
// import wip from '../assets/wip.svg'

export const GoodSorts = () => {
  return (
    <div className='w-10/12 mx-auto md:p-4 md:bg-white md:w-4/5 md:drop-shadow-lg md:rounded-lg lg:w-2/4 my-12'>
        {/* INTRO */}
        <h1 className='text-4xl md:text-5xl'>Good Sorts</h1>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_intro[0]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_intro[1]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_intro[2]}
          {/* Then, we'll also experiment with adjustments/optimizations of these algorithms and see if we can improve them! */}
        </p>
        {/* QUICKSORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>QuickSort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_sorts[0]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {good_sorts[0]}
          </SyntaxHighlighter>
        </div>
        {/* MERGESORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>MergeSort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_sorts[1]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {good_sorts[1]}
          </SyntaxHighlighter>
        </div>
        {/* HEAPSORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>HeapSort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_sorts[2]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {good_sorts[2]}
          </SyntaxHighlighter>
        </div>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_sorts[3]}
        </p>
        <ul className='px-8 md:px-12 list-disc text-slate-600 text-sm md:text-lg lg:text-xl'>
          <li>{gs_sorts[4]}</li>
          <li>{gs_sorts[5]}</li>
          <li>{gs_sorts[6]}</li>
          <li>{gs_sorts[7]}</li>
        </ul>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
              {heap_demo[0]}
          </SyntaxHighlighter>
        </div>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_sorts[8]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
              {heap_demo[1]}
          </SyntaxHighlighter>
        </div>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_sorts[9]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
              {heap_demo[2]}
          </SyntaxHighlighter>
        </div>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_sorts[10]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
              {good_sorts[3]}
          </SyntaxHighlighter>
        </div>
        {/* EXPERIMENT SUITE 1 */}
        <h2 className='text-2xl md:text-3xl mt-2'>Experiment Suite</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_exps[0]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
              {good_sorts[4]}
          </SyntaxHighlighter>
        </div>
        <img className='mx-auto h-3/4 w-3/4 lg:h-3/5 lg:w-3/5' src={goodsorts_exp1} alt="goodsorts experiment 1" />
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_exps[1]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_exps[2]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_exps[3]}
        </p>
        <ul className='px-8 md:px-12 list-disc text-slate-600 text-sm md:text-lg lg:text-xl'>
          <li>{gs_exps[4]}</li>
          <li>{gs_exps[5]}</li>
        </ul>
        <img className='mx-auto h-3/4 w-3/4 lg:h-3/5 lg:w-3/5' src={goodsorts_exp2} alt="goodsorts experiment 2" />
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_exps[6]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_exps[7]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_exps[8]}
        </p>
        <ul className='px-8 md:px-12 list-disc text-slate-600 text-sm md:text-lg lg:text-xl'>
          <li>{gs_exps[9]}</li>
          <li>{gs_exps[10]}</li>
        </ul>
        {/* EXPERIMENT SUITE 1 CONCLUSIONS */}
        <h2 className='text-2xl md:text-3xl mt-2'>Experiment Suite Conclusions</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_conclusions[0]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {gs_conclusions[1]}
        </p>
        {/* <div className='w-2/3 md:w-1/2 mx-auto mt-12'>
          <img src={wip} alt="work in progress" />
          <h1 className='text-center text-2xl md:text-4xl'>Work in progress!</h1>
        </div> */}
        <div className='w-2/12 md:w-1/12 mt-2 bg-red-500 text-center text-sm rounded-md text-white'>
          <a href="#top">To top</a>
        </div>
    </div>
  )
}
