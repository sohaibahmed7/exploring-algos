import random
import timeit
import matplotlib.pyplot as plot

# Swap function
def swap(L, i, j):
    L[i], L[j] = L[j], L[i]

# Traditional Bubble sort
def bubble_sort(L):
    for i in range(len(L)):
        for j in range(len(L) - 1):
            if L[j] > L[j+1]:
                swap(L, j, j+1)

# Traditional Insertion sort
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

# Traditional Selection sort
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

## Number of times we run each experiment 'n'
n = 100

## Experiment 1
BubTimes1 = []
InsTimes1 = []
SelTimes1 = []
sizes1    = []

def experimentOne(size, n):
    totalBub = 0
    totalIns = 0
    totalSel = 0
    for _ in range(n):
        L = create_random_list(size, 1000) # (# of elements, max value)
        L2 = L.copy()
        L3 = L.copy()

        # Insertion sort
        start = timeit.default_timer()
        insertion_sort(L)
        end = timeit.default_timer()
        totalIns += end - start

        # Selection Sort
        start = timeit.default_timer()
        selection_sort(L2)
        end = timeit.default_timer()
        totalSel += end - start

        # Bubble Sort
        start = timeit.default_timer()
        bubble_sort(L3)
        end = timeit.default_timer()
        totalBub += end - start

    return totalIns, totalSel, totalBub

def runExperimentOne (startLength, EndLength, Incr):
    for size in range(startLength, EndLength, Incr):
      totalIns, totalSel, totalBub = experimentOne(size, n)
      avg1 = totalIns / n
      avg2 = totalSel / n
      avg3 = totalBub / n
      InsTimes1.append(avg1)
      SelTimes1.append(avg2)
      BubTimes1.append(avg3)
      sizes1.append(size)

def plotExperimentOne():
    runExperimentOne(10, 500, 25)
    plot.plot(sizes1, InsTimes1, label = "Insertion Sort")
    plot.plot(sizes1, SelTimes1, label = "Selection Sort")
    plot.plot(sizes1, BubTimes1, label = "Bubble Sort")
    plot.title("Comparing the Runtime Averages for 'Bad Sorts' Over Increasing List Sizes")
    plot.xlabel("List Length")
    plot.ylabel("Average Runtime")
    plot.legend(loc = 'upper left')
    plot.show()

## Experiment 2
BubTimes2 = []
InsTimes2 = []
SelTimes2 = []
swapList2 = []

def experimentTwo(swaps, n):
    totalBub = 0
    totalIns = 0
    totalSel = 0

    for _ in range(n):
        L1 = create_near_sorted_list(1000, 1000, swaps)
        L2 = L1.copy()
        L3 = L1.copy()

        ## Bubble Sort
        start = timeit.default_timer()
        bubble_sort(L1)
        end = timeit.default_timer()
        totalBub += end - start

        ## Insertion Sort
        start = timeit.default_timer()
        insertion_sort(L2)
        end = timeit.default_timer()
        totalIns += end - start

        ## Selection Sort
        start = timeit.default_timer()
        selection_sort(L3)
        end = timeit.default_timer()
        totalSel += end - start

    return totalBub, totalIns, totalSel

def runExperimentTwo(start, end, inc):
    for swaps in range(start, end, inc):
        totalB, totalI, totalS = experimentTwo(swaps, n)
        bubAvg  = totalB / n
        insAvg  = totalI / n
        selAvg  = totalS / n
        BubTimes2.append(bubAvg)
        InsTimes2.append(insAvg)
        SelTimes2.append(selAvg)
        swapList2.append(swaps)

## Plotting the experiment
def plotExperimentTwo():
    runExperimentTwo(10, 1500, 25)
    plot.plot(swapList2, BubTimes2, label = "Bubble Sort")
    plot.plot(swapList2, InsTimes2, label = "Insertion Sort")
    plot.plot(swapList2, SelTimes2, label = "Selection Sort")
    plot.title("Comparing the Runtime Averages for 'Bad Sorts' Over Increasing Number of Swaps")
    plot.xlabel("Number of Swaps")
    plot.ylabel("Average Runtime")
    plot.legend(loc = 'upper left')
    plot.show()

## Runner code
plotExperimentOne()
plotExperimentTwo()