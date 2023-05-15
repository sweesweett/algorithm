/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = new Map(); 
    const stack = [];
    nums2.forEach(el=>{
        while(stack.length&&stack[stack.length - 1] < el){
            map.set(stack.pop(),el)
        }
        stack.push(el)


    })

    return nums1.map(el=>map.has(el)?map.get(el):-1)
}