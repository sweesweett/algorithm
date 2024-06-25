/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let ans=[]
    let backtracking=(start,arr,sum)=>{
      if(arr.length===k){
        if(sum===n){
          ans.push(arr)
        }
        return
      }
    
      for(let i=start;i<=9;i++){
        if(n-sum<i){
          break
        }
        backtracking(i+1,[...arr,i],sum+i)
      }
    }
    backtracking(1,[],0)

    return ans
};