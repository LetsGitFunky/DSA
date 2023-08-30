const matrixRotate = function(matrix) {
    let newMatrix = new Array(matrix.length).fill(0).map(() => new Array(matrix.length).fill(0))

    // while loop
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            newMatrix[i][j] = matrix[(matrix.length - 1) - j][i]
        }
    }
    return newMatrix
    // row index
    // col index
    // push [row][col] into newMatrix[col][row]
    // when col === 0
    // increment row
}

console.log(matrixRotate([[1,2,3],[4,5,6],[7,8,9]])); // [7,4,1] [8,5,2] [9,6,3]
console.log(matrixRotate([[6,4,1,3],[4,8,7,5],[1,12,9,6],[2,4,1,2]])); // [2,1,4,6] [4,12,8,4] [1,9,7,1] [2,6,5,3]

// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]

// [7,4,1]
// [8,5,2]
// [9,6,3]
