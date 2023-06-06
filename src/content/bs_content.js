export const bs_intro = [
    "Sorting algorithms are an essential tool and fundamental concept in computer science used to organize and arrange data in a specific order. By doing so, the data becomes easier to search, analyze and manipulate as needed. In short, data becomes easier to work with, which is always a good thing. However, there are many different sorting algorithms, and not all of them are created equally."
    ,
    "In this section, we'll explore three 'bad' sorting algorithms: Bubble sort, Insertion sort, and Selection sort. While these algorithms are relatively simple to implement, they are highly inefficient when it comes to handling large datasets. Their worst-case runtime is O(n^2) where n in the size of the dataset, meaning the time required to sort the data increases exponentially with the size of the input."
    ,
    "Let's explore the implementations of these algorithms and compare them with each other to understand when you would choose one over the other."
    ,
]

export const bs_sorts = [
    "Bubble sort works by repeatedly swapping adjacent elements that are in the wrong order. The algorithm iterates through the list of elements multiple times until no more swaps are needed, indicating that the list is sorted."
    ,
    "Insertion sort works by building the final sorted list one element at a time. The algorithm iterates through the list of elements and compares each element to its predecessor. If the element is smaller, it is moved to its correct position in the sorted sublist. This process is repeated until the entire list is sorted."
    ,
    "Selection sort works by repeatedly finding the minimum element from an unsorted part of the list and swapping it with the first element in the unsorted part. The algorithm iterates through the list of elements multiple times until the list is fully sorted."
    ,
]

export const bs_exps = [
    "Let's run a couple experiments to see how the base implementations of these sorting algorithms perform against each other. We'll compare the runtime performance as the size of the dataset increases, and then we'll compare the runtime performance as the dataset becomes less sorted. The below helper functions create lists that can help with these experiments:"
    ,
    "In this experiment, we start at a list length of 10 and increment the size by 25 until 500 for each iteration. For each list length, 100 random graphs are generated and the average runtime for each algorithm is calculated."
    ,
    "What we learn from this experiment is that when the list size if relatively small, all three sorts perform similarly and not too poorly. However, as the length of the list increases, Bubble sort performs the worst, Insertion sort performs better than Bubble sort, and Selection sort performs the best out of the three."
    ,
    "Why is this the case? Swapping elements in a list consists of two O(1) (or constant time) operations, but when you have to do them repeatedly, the runtime adds up."
    ,
    "Bubble sort performs the worst because it performs the most amount of swaps out of the three algorithms, due to its repetitive nature of constantly swapping with its adjacent element until the list is sorted."
    ,
    "Insertion sort requires less swaps than Bubble sort on average, but still more than Selection sort."
    ,
    "Of course, Selection sort requires the least amount of swaps"
    ,
    "In this experiment, we have a constant list length of 1000, we start at 10 swaps from a sorted list and increment the # of swaps by 25 until 1500 swaps for each iteration. For each # of swaps, 100 random graphs are generated and the average runtime for each algorithm is calculated."
    ,
    "What we learn from this experiment is that Selection sort stays at a relatively constant runtime regardless of the number of times a list is randomly disordered/swapped, while Bubble sort and Insertion sort perform much worse."
    ,
    "Why is this the case? As a dataset becomes more disordered, Bubble and Insertion sort must perform many more swaps than Selection sort does, so we see them performing worse."
    ,
    "Similar to the first experiment, Bubble sort performs the worst because it needs to make the most amount of swaps. So if we increase the disorderedness of the dataset, there are that many swaps to make."
    ,
    "We notice that Insertion sort is actually the best for lists for very low disorderedness, this is due to its nature of swapping minimum elements directly to their sorted or very near-sorted position. So, if most of the list is already sorted, then there aren't many swaps that need to be made."
    ,
]

export const bs_conclusion = [
    "The worst-case runtime for all three of these algorithms is O(n^2), but on average, Selection sort performs the best. However, Insertion sort should be used when the length of the dataset is very small (less than or equal to ~15 elements), or when we know that the dataset is already nearly-sorted. Bubble sort is the easiest to implement, and that's its only real advantage over the other two."
    ,
    "In general, these sorting algorithms are relatively simple to implement, they require very little memory, and due to their simplicity, leave a small code footprint. In some cases (like small dataset size or near-sorted datasets), they may be faster than more complex sorting algorithms due to their low overhead. So, even though they may be 'bad' sorting algorithms, they aren't so bad 100% of the time."
]