// Icons

// Pngs

// Svgs
import badsorts from './assets/badsorts.svg'
import goodsorts from './assets/goodsorts.svg'
import trees from './assets/trees.svg'
import spa from './assets/spa.svg'

// Navigation bar
export const navigation = [
    {
        name: 'home',
        href: '/'
    },
    {
        name: 'bad sorts',
        href: '/badsorts',
        image: badsorts,
        desc: "Insertion Sort, Bubble Sort & Selection Sort. These sorting algorithms are often known as 'Bad Sorts' due to their inefficient nature when compared to more advanced sorting algorithms."
    },
    {
        name: 'good sorts',
        href: '/goodsorts',
        image: goodsorts,
        desc: "Quick Sort, Merge Sort & Heap Sort. These sorting algorithms are often known as 'Good Sorts' due to their efficient nature and ability to handle and sort large datasets."
    },
    {
        name: 'trees',
        href: '/trees',
        image: trees,
        desc: "Binary Search Trees & Red Black Trees. Trees are a data structure used primarily for organizing hierarchical data, such as as file systems. RBTs differ from BSTs such that RBTs are self-balancing."
    },
    {
        name: 'shortest path',
        href: '/spa',
        image: spa,
        desc: "Dijkstra, Bellman-Ford & A*. Shortest path algorithms are used to find a shortest path/distance from a point in a Graph data structure to one or more points in the Graph."
    },
]

//Implementation Code (pain)
export const exp_code = [
`import random
# Create a list of random values
def create_random_list(length, max_value):
    return [random.randint(0, max_value) for _ in range(length)]
# Create a list of random values, sort it, then perform a random # of swaps
def create_near_sorted_list(length, max_value, swaps):
    L = create_random_list(length, max_value)
    L.sort()
    for _ in range(swaps):
        r1 = random.randint(0, length - 1)
        r2 = random.randint(0, length - 1)
        swap(L, r1, r2)
    return L
`,
]


export const bad_sorts = [
`# Traditional Bubble sort
def bubble_sort(L):
    for i in range(len(L)):
        for j in range(len(L) - 1):
            if L[j] > L[j+1]:
                swap(L, j, j+1)
# Swap function
def swap(L, i, j):
    L[i], L[j] = L[j], L[i]`,

`# Traditional Insertion sort
def insertion_sort(L):
    for i in range(1, len(L)):
        insert(L, i)
# Insert helper function
def insert(L, i):
    while i > 0:
        if L[i] < L[i-1]:
            swap(L, i-1, i)
            i -= 1
        else:
            return
# Swap function
def swap(L, i, j):
    L[i], L[j] = L[j], L[i]`,

`# Traditional Selection sort
def selection_sort(L):
    for i in range(len(L)):
        min_index = find_min_index(L, i)
        swap(L, i, min_index)
# Find min index helper
def find_min_index(L, n):
    min_index = n
    for i in range(n+1, len(L)):
        if L[i] < L[min_index]:
            min_index = i
    return min_index
# Swap function
def swap(L, i, j):
    L[i], L[j] = L[j], L[i]`,
]