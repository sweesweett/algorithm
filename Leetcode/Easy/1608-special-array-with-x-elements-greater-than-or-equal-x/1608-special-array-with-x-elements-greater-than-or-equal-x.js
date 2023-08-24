/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  nums.sort((a,b)=>a-b)
  for(let i=0;i<=nums.length;i++){
    let left=0
    let right =nums.length-1
    while(left<=right){
      let mid= Math.floor((left+right)/2)
      if(nums[mid]<i){
        left= mid+1
      }else{
        right=mid-1
      }     
    }
    if(nums.length-left===i){
      return i
    }
  }
  return -1
 
};