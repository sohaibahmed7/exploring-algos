import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import tree_example from '../assets/tree_example.png'
import trees_exp2 from '../assets/trees_exp2.png'
import rbt_eg1 from '../assets/rbt_eg1.png'
import rbt_eg2 from '../assets/rbt_eg2.png'
import rbt_eg3 from '../assets/rbt_eg3.png'
import { bs_tree, bst_demo, rb_tree, tree_exp } from '../content/implementations'
import { trees_intro, trees_terms, trees_bst, trees_rbt, trees_exps, trees_conclusion } from '../content/trees_content'

export const Trees = () => {
  return (
    <div className='w-10/12 mx-auto md:p-4 md:bg-white md:w-4/5 md:drop-shadow-lg md:rounded-lg lg:w-2/4 my-12'>
        {/* INTRO */}
        <h1 className='text-4xl md:text-5xl'>Trees</h1>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_intro[0]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_intro[1]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_intro[2]}
        </p>
        {/* TREE TERMINOLOGY */}
        <h2 className='text-2xl md:text-3xl mt-2'>Tree Terminology</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_terms[0]}
        </p>
        <img src={tree_example} alt="tree example img" className='w-1/3 h-1/3 mx-auto my-2' />
        <ul className='px-8 md:px-12 list-disc text-slate-600 text-sm md:text-lg lg:text-xl'>
          <li>{trees_terms[1]}</li>
          <li>{trees_terms[2]}</li>
          <li>{trees_terms[3]}</li>
          <li>{trees_terms[4]}</li>
          <li>{trees_terms[5]}</li>
          <li>{trees_terms[6]}</li>
          <li>{trees_terms[7]}</li>
        </ul>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_terms[8]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {bs_tree[0]}
          </SyntaxHighlighter>
        </div>
        {/* BST */}
        <h2 className='text-2xl md:text-3xl mt-2'>Binary Search Tree</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_bst[0]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {bs_tree[1]}
          </SyntaxHighlighter>
        </div>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_bst[1]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_bst[2]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {bst_demo[0]}
          </SyntaxHighlighter>
        </div>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_bst[3]}
        </p>
        {/* RED BLACK TREE */}
        <h2 className='text-2xl md:text-3xl mt-2'>Red Black Tree</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_rbt[0]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_rbt[1]}
          <ul className='px-8 md:px-12 list-disc text-slate-600 text-sm md:text-lg lg:text-xl'>
            <li>{trees_rbt[2]}</li>
            <li>{trees_rbt[3]}</li>
            <li>{trees_rbt[4]}</li>
            <li>{trees_rbt[5]}</li>
            <li>{trees_rbt[6]}</li>
          </ul>
          </p>
          <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
            {trees_rbt[7]}
          </p>
          <img className='mx-auto h-4/5 w-4/5 lg:h-1/2 lg:w-1/2' src={rbt_eg1} alt="rbt example 1" />
          <img className='mx-auto h-5/6 w-5/6 lg:h-3/5 lg:w-3/5' src={rbt_eg2} alt="rbt example 2" />
          <img className='mx-auto h-5/6 w-5/6 lg:h-3/5 lg:w-3/5' src={rbt_eg3} alt="rbt example 3" />
          <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
            {trees_rbt[8]}
          </p>
          <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {rb_tree[0]}
          </SyntaxHighlighter>
        </div>
        {/* EXPERIMENT SUITE */}
        <h2 className='text-2xl md:text-3xl mt-2'>Experiment Suite</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_exps[0]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
              {tree_exp[0]}
          </SyntaxHighlighter>
        </div>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_exps[1]}
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
              {tree_exp[1]}
          </SyntaxHighlighter>
        </div>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_exps[2]}
        </p>
        <img className='mx-auto h-3/4 w-3/4 lg:h-3/5 lg:w-3/5' src={trees_exp2} alt="trees experiment 2" />
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_exps[3]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_exps[4]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_exps[5]}
        </p>
        {/* EXPERIMENT SUITE 1 CONCLUSIONS */}
        <h2 className='text-2xl md:text-3xl mt-2'>Experiment Suite Conclusions</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_conclusion[0]}
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          {trees_conclusion[1]}
        </p>
        <div className='w-2/12 md:w-1/12 mt-2 bg-red-500 text-center text-sm rounded-md text-white'>
          <a href="#top">To top</a>
        </div>
    </div>
  )
}

