// O(log(n)) time | O(log(n)) space

const binarySearch = (array, target) => {
    return binarySearchHelper(array, target, 0, array.length - 1);
}

const binarySearchHelper = (array, target, left, right) => {
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
        return middle;
    } else if (target < potentialMatch) {
        return binarySearchHelper(array, target, left, middle - 1);
    } else {
        return binarySearchHelper(array, target, middle + 1, right);
    }
}