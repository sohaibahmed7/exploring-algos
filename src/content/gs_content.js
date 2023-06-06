export const gs_intro = [
    "Simple sorting algorithms like Bubble sort, Insertion sort and Selection sort (the 'bad' sorts) may be relatively easy to understand and implement, but they suffer with low efficiency for large datasets. You may be able to imagine that in a real-life use case of a sorting algorithm, it likely isn't the case that you'll need to sort values in a dataset of just 15 or 20 elements."
    ,
    "In this section, we'll explore three of the more complex 'good' sorting algorithms: QuickSort, MergeSort, and HeapSort. QuickSort is a recursive algorithm with an average-case runtime of O(n log n), and worst-case runtime of O(n^2) (we'll talk about why later), but given its name, it is usually faster than other sorting algorithms in practice. MergeSort is a divide-and-conquer algorithm with a runtime of O(n log n), but is pretty costly in terms of memory usage. HeapSort is an in-place sorting algorithm with a worst-case runtime of O(n log n), and is extremely memory efficient."
    ,
    "Let's explore the implementations of these algorithms and compare them with each other to understand when you would choose one over the other!"
]

export const gs_sorts = [
    "Quicksort works by partitioning an array into two sub-arrays, one with elements smaller than a selected element, called the pivot (usually chosen randomly or as the first element of the list), and the other with elements larger than the pivot. The pivot element is then placed in its correct position in the sorted array via in-place swapping. The process is repeated recursively on the sub-arrays until the entire array is sorted. To visualize this, imagine a deck of cards being divided into smaller piles based on their numerical value, then each pile is further divided and reassembled until the deck is fully sorted."
    ,
    "Mergesort works by dividing a list into two halves, sorting each half recursively (by splitting that half into another two halves and so on, until it can't be split further), and then merging the two sorted halves back together. This is repeated until the entire array is sorted. To visualize this, imagine a pile of unsorted papers being divided in half, each half being sorted alphabetically, and then the two sorted halves being merged together into a single, sorted pile. This process is repeated until all papers are sorted.",
    "As the name suggests, Heapsort has to do with something called a Heap (or a Binary Heap). A Heap is a data structure which is a Binary Tree (see the Trees section!) that satisfies a specific property, known as the Binary Heap Property. The Binary Heap Property states that each parent node in the Heap is either greater than or equal to each of its children (in the case of a Max Heap), or each parent node is less than or equal to its children (in the case of a Min Heap). Let's look at how to implement a Heap (max Heap in particular):"
    ,
    "I'm sure you can see why some algorithms can be difficult to work with given the complexity or length of their implementations, and why 'Bad' sorting algorithms may be preferred in some instances. Regardless, if we take a look at this implementation, it's not too difficult to understand how the Heap actually works."
    ,
    "The Heap is initialized by taking a list as input, and uses the build_heap() method to create the Heap. You can visualize this process as the function going through each element of the array, placing that element at the root of the Heap, and perform swap operations to maintain the Heap property."
    ,
    "build_heap() calls on the sink() method which takes an index i and ensures that the heap property is maintained at that index. It does this by comparing the element at index i to its left and right children. If the element at index i is smaller than its left or right child, it swaps the element with the larger child, and continues the same process at the child's index, recursively."
    ,
    "The swim() method is used for insertion in insert() to maintain the Heap property. To make it easier to insert multiple values I've written insert_values() which iteratively calls insert()."
    ,
    "We can consider extract_max() to be the operation we care about the most with respect to HeapSort. It essentially takes the largest element from the Heap, swims that element down to the end of the heap, and removes it from the Heap. Before looking at HeapSort itself, let's look at a demo of Heap operations."
    ,
    "Notice how the Heap Property is maintained! Every element from the list is present in the Heap, and all children are less than or equal to the value of their parent. Now what happens if we insert the value 10?"
    ,
    "Initially, 10 would have been inserted underneath the value 1 and to the right of 2, since that is the end of the heap. To maintain the Heap property 10 is brought to the top of the Heap with swim(), since it is the largest value present in the Heap. Similarly, if we call extract_max() with the Heap in this state, 10 will be returned and the Heap will go back to its initial form."
    ,
    "With that out of the way, how does HeapSort work? I mentioned extract_max() being important, and that's because HeapSort is simply calling extract_max() repeatedly! We build the Heap, and for the number of elements in the Heap, call extract_max() which removes the returned element from the Heap. Since all the Heap operations are actually just in-place swaps of the list, the resulting list will be sorted."
]

export const gs_exps = [
    "Let's run a couple experiments to see how the base implementations of these sorting algorithms perform against each other. We'll compare the runtime performance as the size of the dataset increases, and then we'll compare the runtime performance as the dataset becomes less sorted. The below helper functions create lists that can help with these experiments:"
    ,
    "In this experiment, we start at a list length of 10 and increment the size by 25 until 500 for each iteration. For each list length, 100 random graphs are generated and the average runtime for each algorithm is calculated."
    ,
    "What we learn from this experiment is that as the length of the list increases, on average HeapSort performs the worst. QuickSort & MergeSort are relatively close in terms of average runtime, but QuickSort performs the best on average."
    ,
    "Why is this the case?"
    ,
    "Building the heap for HeapSort can be slow, since the heap property may need to be restored many times during the build process, resulting in an average slower performance compared to the other two."
    ,
    "QuickSort tends to be faster than MergeSort because of the pivot selection if the pivot avoids QuickSort's worst case. The merging in MergeSort step can be slower than the partitioning step in QuickSort, since merging the sub-arrays requires comparing and copying elements, whereas the partitioning step in QuickSort only requires swapping elements."
    ,
    "In this experiment, we have a constant list length of 1000, we start at 10 swaps from a sorted list and increment the # of swaps by 25 until 500 swaps for each iteration. For each # of swaps, 100 random graphs are generated and the average runtime for each algorithm is calculated."
    ,
    "What we learn from this experiment is that QuickSort definitely performs the best when the dataset is in more disorder but poorly relative to MergeSort for less disorder, and HeapSort performs worse than the other two on average."
    ,
    "Why is this the case?"
    ,
    "Quicksort's worst case arises when the list is nearly sorted."
    ,
    "The other two algorithms aren't really affected by the level of disorder in the initial dataset."
    ,
]

export const gs_conclusions = [
    "QuickSort performs the best out of all three in most cases, except for when the initial dataset is not disordered. Even though HeapSort tends to perform the worst and is the most lengthy to implement from scratch, its in-place nature means that it is memory efficient, so in cases where memory is a concern, HeapSort should be considered. MergeSort is a middle ground between the two, but its nature of being recursive and comparing/copying elements slows it down in comparison to QuickSort."
    ,
    "In general, these sorting algorithms may be more complex to implement and require knowledge of recursion and data structures other than an array/list, but their average and worst-case runtime complexities are faster than the 'bad' sorts (O(n log n) with the exception of QuickSorts unlikely worst-case O(n^2)). This means they are much more efficient for sorting large datasets, which you can imagine is more practical for real-life situations."
]