import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { good_sorts } from '../data'
import wip from '../assets/wip.svg'

export const GoodSorts = () => {
  return (
    <div className='w-10/12 mx-auto md:p-4 md:bg-white md:w-4/5 md:drop-shadow-lg md:rounded-lg lg:w-2/4 my-12'>
        {/* INTRO */}
        <h1 className='text-4xl md:text-5xl'>Good Sorts</h1>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Simple sorting algorithms like Bubble sort, Insertion sort and Selection sort (the 'bad' sorts) may be relatively easy to understand and implement, but they suffer with low efficiency for large datasets. You may be able to imagine that in a real-life use case of a sorting algorithm, it likely isn't the case that you'll need to sort values in a dataset of just 15 or 20 elements.
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          In this section, we'll explore three of the more complex 'good' sorting algorithms: QuickSort, MergeSort, and HeapSort. QuickSort is a recursive algorithm with an average-case runtime of O(n log n), and worst-case runtime of O(n^2) (we'll talk about why later), but given its name, it is usually faster than other sorting algorithms in practice. MergeSort is a divide-and-conquer algorithm with a runtime of O(n log n), but is pretty costly in terms of memory usage. HeapSort is an in-place sorting algorithm with a worst-case runtime of O(n log n), and is extremely memory efficient.
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Let's explore the implementations of these algorithms and compare them with each other to understand when you would choose one over the other. Then, we'll also experiment with adjustments/optimizations of these algorithms and see if we can improve them!
        </p>
        {/* QUICKSORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>QuickSort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Quicksort works by partitioning an array into two sub-arrays, one with elements smaller than a selected element, called the pivot, and the other with elements larger than the pivot. The pivot element is then placed in its correct position in the sorted array via in-place swapping. The process is repeated recursively on the sub-arrays until the entire array is sorted. To visualize this, imagine a deck of cards being divided into smaller piles based on their numerical value, then each pile is further divided and reassembled until the deck is fully sorted.
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {good_sorts[0]}
          </SyntaxHighlighter>
        </div>
        {/* MERGESORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>MergeSort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Mergesort works by dividing a list into two halves, sorting each half recursively (by splitting that half into another two halves and so on, until it can't be split further), and then merging the two sorted halves back together. This is repeated until the entire array is sorted. To visualize this, imagine a pile of unsorted papers being divided in half, each half being sorted alphabetically, and then the two sorted halves being merged together into a single, sorted pile. This process is repeated until all papers are sorted.
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {good_sorts[1]}
          </SyntaxHighlighter>
        </div>
        {/* HEAPSORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>HeapSort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Heap
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {good_sorts[1]}
          </SyntaxHighlighter>
        </div>
        <div className='w-2/3 md:w-1/2 mx-auto mt-12'>
          <img src={wip} alt="work in progress" />
          <h1 className='text-center text-2xl md:text-4xl'>Work in progress!</h1>
        </div>
    </div>
  )
}
