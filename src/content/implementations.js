//Implementation Code
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

export const good_sorts = [
`# QuickSort
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
    return quicksort_copy(left) + [pivot] + quicksort_copy(right)`,

`# MergeSort
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
    return L`,

`# Heap implementation
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

    def swim(self, i):
        while i > 0 and self.data[i] > self.data[self.parent(i)]:
            self.data[i], self.data[self.parent(i)] = self.data[self.parent(i)], self.data[i]
            i = self.parent(i)

    def extract_max(self):
        self.data[0], self.data[self.length - 1] = self.data[self.length - 1], self.data[0]
        max_value = self.data[self.length - 1]
        self.length -= 1
        self.sink(0)
        return max_value

    def insert(self, value):
        if len(self.data) == self.length:
            self.data.append(value)
        else:
            self.data[self.length] = value
        self.length += 1
        self.swim(self.length - 1)

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
            s += "\\n"
            whitespace = whitespace // 2
        return s`,

`def heapsort(L):
    heap = Heap(L)
    for _ in range(len(L)):
        heap.extract_max()`,

`# Create a list of random values
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
    return L`,
]

export const heap_demo = [
`L = [2,4,1,9,8,7,3,5,0,6] # Init a list
H = Heap(L) # Build the Heap
print(H) # Print the Heap
# OUTPUT
            9
        8         7
    5     6     1     3
4   0   2`,

`H.insert(10) # Insert 10
print(H) # Print the Heap
#OUTPUT
            10
        9         7
    5     8     1     3
4   0   2   6`,

`max = H.extract_max() # Extract max value from Heap
print(max) # Print the Max value to confirm its 10
print(H) # Print the Heap
#OUTPUT
The max value is: 10
            9
        8         7
    5     6     1     3
4   0   2`,
]

export const bs_tree = [
`# Node Class
class Node:

    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.parent = None

    def __str__(self): # Helps with printing!
        return "(" + str(self.value) + ")`,
`# BST Class
class BSTree:

    def __init__(self):
        self.root = None

    def is_empty(self):
        return self.root is None

    def get_height(self):
        if self.is_empty():
            return 0
        return self.__get_height(self.root)

    def __get_height(self, node):
        if node is None:
            return 0
        return max(self.__get_height(node.left), 
            self.__get_height(node.right))

    def __get_height(self, node):
        height = 0
        stack = [(node, 0)]

        while stack:
            node, level = stack.pop()
            if node is not None:
                height = max(height, level)
                stack.append((node.left, level + 1))
                stack.append((node.right, level + 1))

        return height

    def insert(self, value):
        if self.is_empty():
            self.root = Node(value)
        else:
            self.__insert(self.root, value)

    def __insert(self, node, value):
        new_node = Node(value)
        if node is None:
            self.root = new_node
            return

        current_node = node
        while True:
            if value < current_node.value:
                if current_node.left is None:
                    current_node.left = new_node
                    new_node.parent = current_node
                    return
                else:
                    current_node = current_node.left
            else:
                if current_node.right is None:
                    current_node.right = new_node
                    new_node.parent = current_node
                    return
                else:
                    current_node = current_node.right

    # Helps with printing!
    def __str__(self):
        if self.is_empty():
            return "[]"
        lines = []
        self.__str_helper(self.root, "", True, lines)
        return "[newline]".join(lines)

    def __str_helper(self, node, prefix, is_tail, lines):
        if node.right is not None:
            new_prefix = prefix + ("│   " if not is_tail else "    ")
            self.__str_helper(node.right, new_prefix, False, lines)
        lines.append(prefix + ("└── " if is_tail else "┌── ") + str(node))
        if node.left is not None:
            new_prefix = prefix + ("    " if is_tail else "│   ")
            self.__str_helper(node.left, new_prefix, True, lines)`
]

export const bst_demo = [
`## FIRST EXAMPLE
bst = BSTree()
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(6)
bst.insert(2)
bst.insert(4)
print(bst)
print(f'Height of the BST: {bst.get_height()}')

# OUTPUT
    ┌── (7)
    │   └── (6)
└── (5)
        ┌── (4)
    └── (3)
        └── (2)

Height of the BST: 2

## SECOND EXAMPLE
bst = BSTree()
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(5)
bst.insert(6)
bst.insert(7)
print(bst)
print(f'Height of the BST: {bst.get_height()}')

# OUTPUT
                    ┌── (7)
                ┌── (6)
            ┌── (5)
        ┌── (4)
    ┌── (3)
└── (2)

Height of the BST: 5`
]

export const rb_tree = [
`class RBNode:

    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.parent = None
        self.colour = "R"

    def is_left_child(self):
        return self == self.parent.left

    def is_right_child(self):
        return not self.is_left_child()

    def is_red(self):
        return self.colour == "R"

    def is_black(self):
        return not self.is_red()

    def make_black(self):
        self.colour = "B"

    def make_red(self):
        self.colour = "R"

    def __str__(self):
        return "(" + str(self.value) + "," + self.colour + ")"

    def colour_switch(self):
        if self.colour == "B" and self.left.colour =="R" and self.right.colour == "R":
            self.make_red()
            self.left.make_black()
            self.right.make_black()

    def rotate_right(self):
        self.parent.make_red()
        self.make_black()
        node = self.parent
        # Store pointers to the nodes involved in the rotation
        left_child = node.left
        left_right_child = left_child.right
        parent = node.parent

        # Perform the rotation
        left_child.right = node
        node.left = left_right_child

        # Update parent pointers
        if parent:
            if node.is_left_child():
                parent.left = left_child
            else:
                parent.right = left_child
        if left_right_child:
            left_right_child.parent = node
        node.parent = left_child
        left_child.parent = parent

    def rotate_left(self):
        new_root = self.right
        self.right = new_root.left
        if new_root.left is not None:
            new_root.left.parent = self
        new_root.parent = self.parent
        if not self.is_red():
            new_root.make_black()
            self.make_red()
        if self.parent is not None:
            if self == self.parent.left:
                self.parent.left = new_root
            else:
                self.parent.right = new_root
        new_root.left = self
        self.parent = new_root

class RBTree:

    def __init__(self):
        self.root = None

    def is_empty(self):
        return self.root == None

    def get_height(self):
        if self.is_empty():
            return 0
        return self.__get_height(self.root)

    def __get_height(self, node):
        if node == None:
            return 0
        return max(self.__get_height(node.left), 
            self.__get_height(node.right))

    def insert(self, value):
        if self.is_empty():
            self.root = RBNode(value)
            self.root.make_black()
        else:
            self.__insert(self.root, value)

    def __insert(self, node, value):
        if value < node.value:
            if node.left == None:
                node.left = RBNode(value)
                node.left.parent = node
                self.fix(node.left)
            else:
                self.__insert(node.left, value)
        else:
            if node.right == None:
                node.right = RBNode(value)
                node.right.parent = node
                self.fix(node.right)
            else:
                self.__insert(node.right, value)

    def fix(self, node):
        if node.parent == None:
            node.make_black()
        elif node.colour == "R":
            if not node.parent.is_red():
                # Parent is black
                if node.is_left_child():
                    return
                else:
                    if node.parent.left is not None and node.parent.left.is_red():
                        node.parent.colour_switch()
                        self.fix(node.parent)
                    else:
                        if node.parent == self.root:
                            self.root = node
                        node.parent.rotate_left()
            else:
                # Parent is red
                if node.is_left_child():
                    if node.parent.parent == self.root:
                        self.root = node.parent
                    node.parent.rotate_right()
                    node.parent.colour_switch()
                    self.fix(node.parent)
                else:
                    node.parent.rotate_left()
                    if node.parent == self.root:
                        self.root = node
                    node.rotate_right()
                    node.colour_switch()
                    self.fix(node)
                    
    def __str__(self):
        if self.is_empty():
            return "[]"
        lines = []
        self.__str_helper(self.root, "", True, lines)
        return "[newline]".join(lines)
            
    def __str_helper(self, node, prefix, is_tail, lines):
        if node.right is not None:
            new_prefix = prefix + ("│   " if not is_tail else "    ")
            self.__str_helper(node.right, new_prefix, False, lines)
        lines.append(prefix + ("└── " if is_tail else "┌── ") + str(node))
        if node.left is not None:
            new_prefix = prefix + ("    " if is_tail else "│   ")
            self.__str_helper(node.left, new_prefix, True, lines)`,
]

export const tree_exp = [
`def create_random_list(length, max_value):
return [random.randint(0, max_value) for _ in range(length)]

def create_near_sorted_list(length, max_value, swaps):
    L = create_random_list(length, max_value)
    L.sort()
    for _ in range(swaps):
        r1 = random.randint(0, length - 1)
        r2 = random.randint(0, length - 1)
        swap(L, r1, r2)
    return L

def swap(L, i, j):
    L[i], L[j] = L[j], L[i]

def create_random_trees(length):
    lst = create_random_list(length, length)
    rbtree = rbt.RBTree()
    bstree = bst.BSTree()
    for node in lst:
        rbtree.insert(node)
        bstree.insert(node)
    return rbtree, bstree

def create_nearsorted_trees(length, swaps):
    lst = create_near_sorted_list(length, length, swaps)
    rbtree = rbt.RBTree()
    bstree = bst.BSTree()
    for node in lst:
        rbtree.insert(node)
        bstree.insert(node)
    return rbtree, bstree`,

`*****************************************
Average RBT height: 18.35
Average BST height: 30.27
Total average difference in height: 11.92`,
]