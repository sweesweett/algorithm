/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
  const func= customfunction.f
  let ans=[]
  for(let i=1;i<=z;i++){
      let l=1
      let r=z
      while(l<=r){
        let m=Math.floor((l+r)/2)
        if(func(i,m)===z){
          ans.push([i,m])
          break
        }
        if(func(i,m)>z){
            r=m-1
        }else{
            l=m+1
        }

      }
  }
  return ans
};