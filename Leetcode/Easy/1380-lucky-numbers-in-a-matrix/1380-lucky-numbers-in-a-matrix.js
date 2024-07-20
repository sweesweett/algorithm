/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let arr=new Array(matrix[0].length).fill(0)
    let set= new Set()
    for(let i=0;i<matrix.length;i++){
      let min=Infinity
      let max=0
      for(let j=0;j<matrix[0].length;j++){
        arr[j]=Math.max(arr[j],matrix[i][j])
        min=Math.min(min,matrix[i][j])
      }
      set.add(min)

    }
    return arr.filter(el=>set.has(el))
};