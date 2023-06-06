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
        desc: "QuickSort, MergeSort & HeapSort. These sorting algorithms are often known as 'Good Sorts' due to their efficient nature and ability to handle and sort large datasets."
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