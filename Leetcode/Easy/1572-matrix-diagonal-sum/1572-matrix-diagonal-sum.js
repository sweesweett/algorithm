/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum=0
    for(let i =0;i<mat.length;i++){
        sum+=mat[i][i]
        if(i!==(mat.length-1)/2){
            sum+=+mat[i][mat.length-1-i]
        }
    }
    return sum    
};