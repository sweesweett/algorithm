/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let arr=['a','b','c']
    let ans=[]
    let backtracking=(str)=>{
      if(str.length>=n){
          ans.push(str)
          return;
      }
      for(let val of arr){
          if(str.at(-1)!==val){
            backtracking(str+val)
          }
      }

    }
    backtracking('')
    return ans[k-1]??''
};