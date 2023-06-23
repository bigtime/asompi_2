const transposeMatrix = (matrix) => {
    const transposedMatrix = [];
    for (let col = 0; col < matrix[0].length; col++) {
        const newRow = [];
        for (let row = 0; row < matrix.length; row++) {
            newRow.push(matrix[row][col]);
        }
        transposedMatrix.push(newRow);
    }
    return transposeMatrix;
}

const matrix1 = [[1],[2],[3]]

console.log(transposeMatrix(matrix1))