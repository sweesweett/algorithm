/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let length= pattern.length
    let min=Infinity
    let backtracking=(set,idx,nums)=>{
      if(min!==Infinity&&String(min)[0]<nums[0]){
        return;
      }
      if(idx>=length){
          if(nums.length>=length+1){
            min= Math.min(min,Number(nums))
          }
            return

      }
      let char=pattern[idx]
      let [start,end]=nums?determiningIterateNum(char,Number(nums.at(-1))):[1,length+1]
      for(let i=start;i<=end;i++){
        if(!set.has(i)){
          set.add(i)
          if(!nums){
            backtracking(set,idx,nums+i)
          }else{
            backtracking(set,idx+1,nums+i)
          }
          set.delete(i)
        }
      }

    }
    backtracking(new Set(),0,'')

    return String(min)
};
function determiningIterateNum(char,num){
  if(char==='I'){
    return [num+1,9]
  }else{
    return [1,num-1]
  }

}