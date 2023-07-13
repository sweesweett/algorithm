/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let set = new Set()
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===0){
                set.add([i,j])
            }
        }
    }
    const ddd=(x,y)=>{
        if(x>=matrix.length||y>=matrix[0].length||x<0||y<0){
            return;
        }
        matrix[x][y]=0
        for(let i=0;i<matrix.length;i++){
            matrix[i][y]=0
        }
        for(let i=0;i<matrix[0].length;i++){
            matrix[x][i]=0
        }

    }
    set.forEach((el)=>{
        ddd(...el)


    })
};