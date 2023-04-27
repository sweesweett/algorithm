/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let map=new Map()
 for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            map.set(`${i}/${j}`,matrix[i][j])
           
            
        }
    }

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            matrix[j][matrix.length-1-i]=map.get(`${i}/${j}`)
            
        }
    }

    
};