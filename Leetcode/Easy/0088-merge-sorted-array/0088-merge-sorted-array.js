/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n===0){
        return nums1.sort((a,b)=>a-b)
    }
    for(let i =m;i<nums1.length;i++){
        if(nums1[i]===0){
            nums1[i]=nums2[nums1.length-1-i]
        }

    }
    nums1.sort((a,b)=>a-b)
};