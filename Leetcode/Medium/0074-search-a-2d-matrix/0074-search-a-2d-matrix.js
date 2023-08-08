/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i=0;i<matrix.length;i++){
        if(matrix[i].at(-1)>=target){
            for(let j=matrix[0].length;j>=0;j--){
                if(matrix[i][j]===target){
                    return true
                }
                if(matrix[i][j]<target){
                    return false
                }
            }
        }

    }
    return false
};