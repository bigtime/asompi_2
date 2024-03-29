class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const middleNode = (linkedList) => {
    let slowNode =  linkedList;
    let fastNode = linkedList;
    while (fastNode !== null && fastNode.next !== null) {
        slowNode =  slowNode.next;
        fastNode = fastNode.next.next;
    }
    return slowNode;
}