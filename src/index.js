module.exports = function towelSort(matrix) {
    let newArray = [];
    if (matrix == undefined || matrix.length === 0) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 1) {
                newArray = newArray.concat(matrix[i].reverse());
            } else {
                newArray = newArray.concat(matrix[i]);
            }
        }
        return newArray;
    }
};

//2 вариант
//     let newArray = [];
//     if (matrix !== undefined && matrix.length !== 0) {
//         for (let i = 0; i < matrix.length; i++) {
//             if (i % 2 === 1) {
//                 newArray = newArray.concat(matrix[i].reverse());
//             } else {
//                 newArray = newArray.concat(matrix[i]);
//             }
//         }
//         return newArray;
//     } else {
//         return [];
//     }
// };
