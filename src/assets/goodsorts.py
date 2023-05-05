import math, random, timeit
import matplotlib.pyplot as plot

# QuickSort
def quicksort(L):
    copy = quicksort_copy(L)
    for i in range(len(L)):
        L[i] = copy[i]

# QuickSort helper
def quicksort_copy(L):
    if len(L) < 2:
        return L
    pivot = L[0]
    left, right = [], []
    for num in L[1:]:
        if num < pivot:
            left.append(num)
        else:
            right.append(num)
    return quicksort_copy(left) + [pivot] + quicksort_copy(right)

# MergeSort
def mergesort(L):
    if len(L) <= 1:
        return
    mid = len(L) // 2
    left, right = L[:mid], L[mid:]

    mergesort(left)
    mergesort(right)
    temp = merge(left, right)

    for i in range(len(temp)):
        L[i] = temp[i]

# MergeSort helper
def merge(left, right):
    L = []
    i = j = 0

    while i < len(left) or j < len(right):
        if i >= len(left):
            L.append(right[j])
            j += 1
        elif j >= len(right):
            L.append(left[i])
            i += 1
        else:
            if left[i] <= right[j]:
                L.append(left[i])
                i += 1
            else:
                L.append(right[j])
                j += 1
    return L

# Heap implementation
class Heap:
    length = 0
    data = []

    def __init__(self, L):
        self.data = L
        self.length = len(L)
        self.build_heap()

    def build_heap(self):
        for i in range(self.length // 2 - 1, -1, -1):
            self.sink(i)

    def sink(self, i):
        largest_known = i
        if self.left(i) < self.length and self.data[self.left(i)] > self.data[i]:
            largest_known = self.left(i)
        if self.right(i) < self.length and self.data[self.right(i)] > self.data[largest_known]:
            largest_known = self.right(i)
        if largest_known != i:
            self.data[i], self.data[largest_known] = self.data[largest_known], self.data[i]
            self.sink(largest_known)

    def extract_max(self):
        self.data[0], self.data[self.length - 1] = self.data[self.length - 1], self.data[0]
        max_value = self.data[self.length - 1]
        self.length -= 1
        self.sink(0)
        return max_value

    def swim(self, i):
        while i > 0 and self.data[i] > self.data[self.parent(i)]:
            self.data[i], self.data[self.parent(i)] = self.data[self.parent(i)], self.data[i]
            i = self.parent(i)

    def insert(self, value):
        if len(self.data) == self.length:
            self.data.append(value)
        else:
            self.data[self.length] = value
        self.length += 1
        self.swim(self.length - 1)

    def insert_values(self, L):
        for num in L:
            self.insert(num)

    def left(self, i):
        return 2 * (i + 1) - 1

    def right(self, i):
        return 2 * (i + 1)

    def parent(self, i):
        return (i + 1) // 2 - 1

    def __str__(self):
        height = math.ceil(math.log(self.length + 1, 2))
        whitespace = 2 ** height
        s = ""
        for i in range(height):
            for j in range(2 ** i - 1, min(2 ** (i + 1) - 1, self.length)):
                s += " " * whitespace
                s += str(self.data[j]) + " "
            s += "\n"
            whitespace = whitespace // 2
        return s

# Heapsort
def heapsort(L):
    heap = Heap(L)
    for _ in range(len(L)):
        heap.extract_max()

# Heap demo
L = [2,4,1,9,8,7,3,5,0,6] # Init a list
H = Heap(L) # Build the Heap
print(H) # Print the Heap


H.insert(10) # Insert 10
print(H) # Print the Heap

max = H.extract_max() # Extract max value from Heap
print(f"The max value is: {max}") # Print the Max value to confirm its 10
print(H) # Print the Heap

# Create a list of random values
def create_random_list(length, max_value):
    return [random.randint(0, max_value) for _ in range(length)]

# Swap function
def swap(L, i, j):
    L[i], L[j] = L[j], L[i]

# Create a list of random values, sort it, then perform a random # of swaps
def create_near_sorted_list(length, max_value, swaps):
    L = create_random_list(length, max_value)
    L.sort()
    for _ in range(swaps):
        r1 = random.randint(0, length - 1)
        r2 = random.randint(0, length - 1)
        swap(L, r1, r2)
    return L

## Number of times we run each experiment 'n'
n = 100

## Experiment 1
quickTimes1 = []
mergeTimes1 = []
heapTimes1  = []
sizes1      = []

def experimentOne(size, n):
    totalQuick = 0
    totalMerge = 0
    totalHeap  = 0
    
    for _ in range(n):
        L1 = create_random_list(size, 1000)
        L2 = L1.copy()
        L3 = L1.copy()

        ## Quicksort
        start = timeit.default_timer()
        quicksort(L1)
        end = timeit.default_timer()
        totalQuick += end - start

        ## Mergesort
        start = timeit.default_timer()
        mergesort(L2)
        end = timeit.default_timer()
        totalMerge += end - start

        ## Heapsort
        start = timeit.default_timer()
        heapsort(L3)
        end = timeit.default_timer()
        totalHeap += end - start

    return totalQuick, totalMerge, totalHeap

def runExperimentOne(start, end, inc):
    for size in range(start, end, inc):
        totalQ, totalM, totalH = experimentOne(size, n)
        quickAvg = totalQ / n
        mergeAvg = totalM / n
        heapAvg  = totalH / n
        quickTimes1.append(quickAvg)
        mergeTimes1.append(mergeAvg)
        heapTimes1.append(heapAvg)
        sizes1.append(size)

def plotExperimentOne():
    runExperimentOne(10, 500, 25)
    plot.plot(sizes1, quickTimes1, label = "Quicksort")
    plot.plot(sizes1, mergeTimes1, label = "Mergesort")
    plot.plot(sizes1, heapTimes1, label = "Heapsort")
    plot.title("Comparing the Runtime Averages for 'Good Sorts' Over Increasing List Sizes")
    plot.xlabel("List Length")
    plot.ylabel("Average Runtime")
    plot.legend(loc = 'upper left')
    plot.show()

## Experiment 2
quickTimes2 = []
mergeTimes2 = []
heapTimes2  = []
swapList2   = []

def experimentTwo(swaps, n):
    totalQuick = 0
    totalMerge = 0
    totalHeap  = 0

    for _ in range(n):
        L1 = create_near_sorted_list(1000, 1000, swaps)
        L2 = L1.copy()
        L3 = L1.copy()

        ## Quicksort
        start = timeit.default_timer()
        quicksort(L1)
        end = timeit.default_timer()
        totalQuick += end - start

        ## Mergesort
        start = timeit.default_timer()
        mergesort(L2)
        end = timeit.default_timer()
        totalMerge += end - start

        ## Heapsort
        start = timeit.default_timer()
        heapsort(L3)
        end = timeit.default_timer()
        totalHeap += end - start

    return totalQuick, totalMerge, totalHeap

def runExperimentTwo(start, end, inc):
    for swaps in range(start, end, inc):
        totalQ, totalM, totalH = experimentTwo(swaps, n)
        quickAvg = totalQ / n
        mergeAvg = totalM / n
        heapAvg  = totalH / n
        quickTimes2.append(quickAvg)
        mergeTimes2.append(mergeAvg)
        heapTimes2.append(heapAvg)
        swapList2.append(swaps)

def plotExperimentTwo():
    runExperimentTwo(10, 500, 25)
    plot.plot(swapList2, quickTimes2, label = "Quicksort Original")
    plot.plot(swapList2, mergeTimes2, label = "Mergesort Original")
    plot.plot(swapList2, heapTimes2, label = "Heapsort Original")
    plot.title("Comparing the Runtime Averages for 'Good Sorts' Over Increasing Number of Swaps")
    plot.xlabel("Number of Swaps")
    plot.ylabel("Average Runtime")
    plot.legend(loc = 'upper left')
    plot.show()

## Runner code
plotExperimentOne()
plotExperimentTwo()