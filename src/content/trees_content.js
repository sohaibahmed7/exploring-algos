export const trees_intro = [
    "Trees are a fundamental data structure in computer science, widely used for organizing and efficiently accessing data in a hierarchical manner. They provide an organized way to store and retrieve information, in most cases rather quickly!"
    ,
    "In this section, we'll explore two implementations of trees, Binary Search Trees (BSTs), and Red Black Trees (RBTs). BSTs are designed for efficient searching, insertion, and deletion operations (we'll focus on insertion!), and they leverage the property that all left child nodes are less than their parent, and all right child nodes are greater than their parent. RBTs are essentially a type of BST that guarantee O(lg n) runtime for searching, insertion, and deletion operations, making them particularly useful for larger and more complex datasets, but they're a pain to implement."
    ,
    "Let's explore the implementations of these tree variations, and compare them with each other to understand when you would choose to use one over the other. Before that, we'll look into some basic tree terminology so that we can be sure to understand how BSTs and RBTs work. Finally, we'll experiment with both of them and discuss our findings."
]

export const trees_terms = [
    "Before we dive into implementing Binary Search Trees and Red Black Trees, it's essential we understand how trees work, so let's look at this example tree and break down some of its components and learn the correct terminology."
    ,
    "Size of a tree: The number of nodes in a tree. The size of the above tree is 9."
    ,
    "Root node: The first node of the tree. The root of the above tree is Node 8."
    ,
    "Parent node: The parent of any node is the node connected directly above that node. For example, Node 3 and Node 10 share the same parent, Node 8. Note that since Node 8 is the root node, it does not have a parent."
    ,
    "Child node: Similar to the parent node, the child of any node are the node(s) connected directly below that node. For example, Node 8 has two children, Node 3 and Node 10. Certain tree variations have a higher maximum children count than others, in the case above, each node can have a maximum or 2 children."
    ,
    "Leaf node: Nodes that do not have children (i.e. nodes at the bottom of the tree). The leaves of the above tree are Node 4, Node 7, and Node 13."
    ,
    "Height: The longest distance from the root to a leaf (not including the root). The height of the above tree is 3."
    ,
    "Depth: The longest distance from a leaf to the root. The depth of the above tree is 4."
    ,
    "Nodes are the base for any tree implementation, so let's first set up a class which represents general nodes:"
]

export const trees_bst = [
    "BSTs are a type of data structure that organizes elements as nodes in a hierarchical manner, such that the values of left child nodes are less than their parent, while the values of the right child nodes are greater. This property allows for efficient searching, insertion, and deletion operations. They aren't too difficult to implement, so let's look at how to do it!"
    ,
    "BSTs average-case runtime complexity for searching, insertion, and deletion operations is O(lg n), which can be efficient for balanced trees. However, the main disadvantage of BSTs is their sensitivity to the order of insertion. If elements are inserted in sorted or nearly sorted order, the tree can become unbalanced and lose its efficiency, degrading the time complexity to O(n)."
    ,
    "A balanced tree refers to a tree structure where the heights of the subtrees of any node do not differ by a large amount. In other words, the tree maintains a relatively even distribution of nodes across its levels. Now, let's look at a short demo of the operations."
    ,
    "In the two examples from the demo above, we can see pretty clearly how the insertion order makes a significant difference in the height of the BST."
]

export const trees_rbt = [
    "Red-black trees are a type of binary search tree that address the issue of unbalanced BSTs. They maintain an additional property of coloring each node either red or black and automatically perform rotations and color swaps to ensure the tree remains balanced during insertions or deletions. This self-balancing property guarantees a worst-case time complexity of O(lg n) for all operations. Before we implement them, let's go over some of the properties of RBTs."
    ,
    "In addition to the general properties of binary search trees:"
    ,
    "Each node is coloured either red or black (the root will always be black)."
    ,
    "Every node is red when inserted (may change if the red node isn't in the correct place)."
    ,
    "Red nodes cannot have red children."
    ,
    "Every path from root to null link has the same number of black links. (This property is pretty interesting and helps maintain the balance of the tree!)"
    ,
    "Red nodes lean left (so every red node would be a left child of some parent, though some implementations use right leaning, and some others don't care)."
    ,
    "Explaing how the insertions and rotations actually work is rather difficult to do in words, so let's look at a few visual examples:"
    ,
    "With an understanding of how RBTs are supposed to work in theory, here's how we can implement them!"
    ,
]

export const trees_exps = [
    "Let's run a couple experiments to see how these tree implementations compare against each other in terms of their height. We'll compare the average heights for randomly generated trees of the same size, and then we'll compare the average difference of height as insertion becomes more disordered. The below helper functions create lists and trees that can help with these experiments:"
    ,
    "In the first experiment, we randomly generate 100 BSTs and RBTs of the same size (10,000), and calculate the average height at the end. The results can be seen below for one instance of this experiment:"
    ,
    "As we can see, on average for 10,000 nodes, the height of a Red Black Tree is ~12 lower than the height of a Binary Search Tree. The reason BST heights for a large tree size are significantly higher than a RBT is because BSTs are not guaranteed to be balanced (recall that balancing refers to trees maintaining a relatively even distribution of nodes across its levels). This result gives us a general grasp on why RBTs perform better than BSTs in most search and insertion cases, since a shorter tree provides a shorter path to search/insert to."
    ,
    "In this experiment, we have a constant tree size of 1000, we start with trees that have been disordered by 5 random swaps, and increment the # of swaps by 25 until 1500 swaps for each iteration. For each # of swaps, we randomly swap and generate both types of trees for 100 trials. In the end, for each of those trials, we calculate the average height, and plot the difference alongside the average heights of the respective trees."
    ,
    "What we learn from this experiment is that with trees of very little disorder, the average height of a BST is much greater than a RBT. This is because with very low disordered in the insertion of elements into a BST, we enter its worst case (i.e. the trees are likely to have a single branch for each node, O(n) complexity). On the other hand, as the number of swaps begin to increase, and the trees are most likely in greater disorder, the average BST height decreases."
    ,
    "The result is the RBT seems rather flat, but this shoulnd't come as a surprise because we know that RBTs are self-balancing. So, regardless of how disorderd the insertion is, the RBT performs the necessary rotations and colour-swaps to balance the tree. This leads to the height of the tree remaining at a consistent level."
    ,
]

export const trees_conclusion = [
    "For small tree sizes, or trees that we can guarantee a high level of disorder, Binary Search Trees are a good choice from an implementation standpoint (even though its worst case performance is O(n)) because of how much easier they are to understand and maintain. We've seen that Red Black Trees are a pain to implement, and some of their rules regarding insertion and rotation may be difficult concepts to grasp."
    ,
    "That being said, we've also seen how we can use the complex nature of RBTs to guarantee O(lg n) performance, thanks to its ability to self-balance. This behaviour is great when the dataset we are working with is very large, or if we aren't aware of its sortedness. Similar to most of the other topics we've discussed, each algorithm and data structure has its own strengths and weaknesses depending on the situation!"
]