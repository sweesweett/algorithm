/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
   obj={}
   let arr=[]
   for(let val of nums1){
     if(obj[val]){
       obj[val]+=1
     }else{
       obj[val]=1
     }
   } 
   for(let val of nums2){
     if(obj[val]){
       obj[val]-=1
       arr.push(val)
     }
   }
   return arr
};