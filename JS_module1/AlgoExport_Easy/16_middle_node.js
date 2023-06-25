class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time | O(1) space - where n is the number of nodes in the linked list

const middleNode = (linkedlist) => {
    let count = 0;
    let currentNode = linkedList;
    while (currentNode !== null) {
        count++;
        currentNode = currentNode.next;
    }

    let middleNode = linkedList;
    for (let i = 0; i < Math.floor(count / 2); i++) {
        middleNode = middleNode.next;
    }
}