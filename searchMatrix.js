var searchMatrix = function(matrix, target) {
    let flat = matrix.flat();
    if (flat.includes(target)) return true;
    return false;
};
