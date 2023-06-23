class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const evaluateExpressionTree = (tree) => {
    if (tree.value >= 0) return tree.value;

    const leftValue = evaluateExpressionTree(tree.left);
    const rightValue = evaluateExpressionTree(tree.right);
    
    if (tree.value === -1) return leftValue + rightValue;
    if (tree.value === -2) return leftValue - rightValue;
    if (tree.value === -3) return Math.trunc(leftValue / rightValue);

    return leftValue * rightValue;
}