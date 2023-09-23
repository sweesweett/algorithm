/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length===0){
        return []
    }
   let start=0
   let ans=[]
   for(let i=1;i<=nums.length;i++){
       if(nums[i]-nums[i-1]===1)continue
       let str= i-start>1?`${nums[start]}->${+nums[i-1]}`:`${nums[start]}`
       ans.push(str)
       start=i
   
   }

   return ans
};