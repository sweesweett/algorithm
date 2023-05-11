/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let left=0
   let right=height.length-1
   let max=-Infinity
   while(left<right){

       let val=Math.min(height[left],height[right])*(right-left)
       if(val>max){
           max=val
       }
       if(height[left]<height[right]){
           left++
       }
       else if(height[left]>=height[right]){
           right--
       }
   }
   return max
};