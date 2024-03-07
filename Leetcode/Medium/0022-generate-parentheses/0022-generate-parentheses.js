/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let arr=[[""],['()']]
    for(let i=1;i<n;i++){
      let tmpArr=[]
        for(let j=0;j<=i;j++){
          let left=arr[i-j]
          let right=arr[j]
          for(val of left){
            for(val2 of right){
              tmpArr.push(`(${val})${val2}`)
            }
          }
        }
        arr.push(tmpArr)
      
    }
    return arr[n]
};