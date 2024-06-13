/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let set= new Set(nums)
    let ans
    let backtracking=(binary)=>{
      if(ans){
        return
      }
      if(binary.length===nums.length){
        if(!set.has(binary)){
          ans=binary
        }
        return
      }
      backtracking(binary+'0')
      backtracking(binary+'1')
    }
    backtracking('')
    return ans
};