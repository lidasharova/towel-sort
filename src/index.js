// You should implement your task here.



module.exports = function towelSort(matrix) {
   let arr = matrix.reduce((sum, cur, i) => {
        return sum.concat(!(i % 2) ? cur : cur.reverse());
    }, []);
    return arr;
};
