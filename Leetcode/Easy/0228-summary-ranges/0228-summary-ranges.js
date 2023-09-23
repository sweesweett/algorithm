/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length===0){
        return []
    }
   let start=0,prev=0
   let ans=[]
   for(let i=1;i<=nums.length;i++){
       if(nums[i]-nums[prev]!==1||nums[i]===undefined){
           if(prev-start>0){
               ans.push(nums[start]+'->'+nums[prev])
           }else{
               ans.push(nums[start]+'')
           }
           start=i
       }
        prev=i
       
   }

   return ans
};