module.exports = function towelSort(matrix) {
    let newArray = [];
    if (!matrix.length === 0) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 1) {
                newArray.concat(matrix[i].reverse());
            } else {
                newArray.concat(matrix[i]);
            }
            return newArray;
        }
    } else {
        return [];
    }
};
