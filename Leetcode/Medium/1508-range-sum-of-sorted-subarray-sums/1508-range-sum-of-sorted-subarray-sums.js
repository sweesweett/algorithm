/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let ans=[...nums]

    for(let i=0;i<nums.length;i++){
       
        let arr= nums.slice(i)
         let sum=nums[i]
        for(let i=1;i<arr.length;i++){
            sum+=arr[i]
            ans.push(sum)
        }
    }
    ans.sort((a,b)=>a-b)
   return ans.slice(left-1,right).reduce((a,b)=>a+b,0)%(10**9 + 7)
};