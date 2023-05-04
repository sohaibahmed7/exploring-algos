import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs'


import { exp_code, bad_sorts } from '../data'
import badsorts_exp1 from "../assets/badsorts_exp1.png"
import badsorts_exp2 from "../assets/badsorts_exp2.png"

export const BadSorts = () => {
  return (
    <>
    <div className='w-10/12 mx-auto md:p-4 md:bg-white md:w-4/5 md:drop-shadow-lg md:rounded-lg lg:w-2/4 my-12'>
        {/* INTRO */}
        <h1 className='text-4xl md:text-5xl'>Bad Sorts</h1>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Sorting algorithms are an essential tool and fundamental concept in computer science used to organize and arrange data in a specific order. By doing so, the data becomes easier to search, analyze and manipulate as needed. In short, data becomes easier to work with, which is always a good thing. However, there are many different sorting algorithms, and not all of them are created equally. 
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          In this section, we'll explore three 'bad' sorting algorithms: Bubble sort, Insertion sort, and Selection sort. While these algorithms are relatively simple to implement, they are highly inefficient when it comes to handling large datasets. Their worst-case runtime is O(n^2) where n in the size of the dataset, meaning the time required to sort the data increases exponentially with the size of the input.
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Let's explore the implementations of these algorithms and compare them with each other to understand when you would choose one over the other.
        </p>
        {/* BUBBLE SORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>Bubble Sort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Bubble sort works by repeatedly swapping adjacent elements that are in the wrong order. The algorithm iterates through the list of elements multiple times until no more swaps are needed, indicating that the list is sorted.
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {bad_sorts[0]}
          </SyntaxHighlighter>
        </div>
        {/* INSERTION SORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>Insertion Sort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Insertion sort works by building the final sorted list one element at a time. The algorithm iterates through the list of elements and compares each element to its predecessor. If the element is smaller, it is moved to its correct position in the sorted sublist. This process is repeated until the entire list is sorted. 
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {bad_sorts[1]}
          </SyntaxHighlighter>
        </div>
        {/* SELECTION SORT */}
        <h2 className='text-2xl md:text-3xl mt-2'>Selection Sort</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Selection sort works by repeatedly finding the minimum element from an unsorted part of the list and swapping it with the first element in the unsorted part. The algorithm iterates through the list of elements multiple times until the list is fully sorted.
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
            {bad_sorts[2]}
          </SyntaxHighlighter>
        </div>
        {/* EXPERIMENT SUITE */}
        <h2 className='text-2xl md:text-3xl mt-2'>Experiment Suite</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Let's run a couple experiments to see how the base implementations of these sorting algorithms perform against each other. We'll compare the runtime performance as the size of the dataset increases, and then we'll compare the runtime performance as the dataset becomes less sorted. The below helper functions create lists that can help with these experiments:
        </p>
        <div className='text-xs md:text-base'>
          <SyntaxHighlighter language='python' style={tomorrow}>
              {exp_code[0]}
          </SyntaxHighlighter>
        </div>
        <img className='mx-auto h-3/4 w-3/4 lg:h-3/5 lg:w-3/5' src={badsorts_exp1} alt="badsorts experiment 1" />
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          In this experiment, we start at a list length of 10 and increment the size by 25 until 500 for each iteration. For each list length, 100 random graphs are generated and the average runtime for each algorithm is calculated.
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          What we learn from this experiment is that when the list size if relatively small, all three sorts perform similarly and not too poorly. However, as the length of the list increases, Bubble sort performs the worst, Insertion sort performs better than Bubble sort, and Selection sort performs the best out of the three.
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Why is this the case? Swapping elements in a list consists of two O(1) (or constant time) operations, but when you have to do them repeatedly, the runtime adds up. 
        </p>
        <ul className='px-8 md:px-12 list-disc text-slate-600 text-sm md:text-lg lg:text-xl'>
          <li>
            Bubble sort performs the worst because it performs the most amount of swaps out of the three algorithms, due to its repetitive nature of constantly swapping with its adjacent element until the list is sorted.
          </li>
          <li>
            Insertion sort requires less swaps than Bubble sort on average, but still more than Selection sort.
          </li>
          <li>
            Of course, Selection sort requires the least amount of swaps
          </li>
        </ul>
        <img className='mx-auto h-3/4 w-3/4 lg:h-3/5 lg:w-3/5' src={badsorts_exp2} alt="badsorts experiment 2" />
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          In this experiment, we have a constant list length of 1000, we start at 10 swaps from a sorted list and increment the # of swaps by 25 until 1500 swaps for each iteration. For each # of swaps, 100 random graphs are generated and the average runtime for each algorithm is calculated.
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          What we learn from this experiment is that Selection sort stays at a relatively constant runtime regardless of the number of times a list is randomly disordered/swapped, while Bubble sort and Insertion sort perform much worse.
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          Why is this the case? As a dataset becomes more disordered, Bubble and Insertion sort must perform many more swaps than Selection sort does, so we see them performing worse.
        </p>
        <ul className='px-8 md:px-12 list-disc text-slate-600 text-sm md:text-lg lg:text-xl'>
          <li>
            Similar to the first experiment, Bubble sort performs the worst because it needs to make the most amount of swaps. So if we increase the disorderedness of the dataset, there are that many swaps to make. 
          </li>
          <li>
            We notice that Insertion sort is actually the best for lists for very low disorderedness, this is due to its nature of swapping minimum elements directly to their sorted or very near-sorted position. So, if most of the list is already sorted, then there aren't many swaps that need to be made.
          </li>
        </ul>
        {/* CONCLUSIONS */}
        <h2 className='text-2xl md:text-3xl mt-2'>Conclusions</h2>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          The worst-case runtime for all three of these algorithms is O(n^2), but on average, Selection sort performs the best. However, Insertion sort should be used when the length of the dataset is very small (less than or equal to ~15 elements), or when we know that the dataset is already nearly-sorted. Bubble sort is the easiest to implement, and that's its only real advantage over the other two.
        </p>
        <p className='mt-2 text-slate-600 text-sm md:text-lg lg:text-xl'>
          In general, these sorting algorithms are relatively simple to implement, they require very little memory, and due to their simplicity, leave a small code footprint. In some cases (like small dataset size or near-sorted datasets), they may be faster than more complex sorting algorithms due to their low overhead. So, even though they may be 'bad' sorting algorithms, they aren't so bad 100% of the time.
        </p>
        <div className='w-2/12 md:w-1/12 mt-2 bg-red-500 text-center text-sm rounded-md text-white'>
          <a href="#top">To top</a>
        </div>
    </div>
    </>
  )
}
