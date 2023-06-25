/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let left = 0, right = 0
    let max = [], min = []
    
    while (right < nums.length) {
        let dd = nums[right]
        while (max.length && dd> max[max.length - 1]){
        max.pop()
        
        }
        while (min.length && dd < min[min.length - 1]){
             min.pop()
    
        }
        max.push(dd)
        min.push(dd)
        right++
        if (max[0] - min[0] <= limit) continue   
        if (max[0] == nums[left]) max.shift()
        if (min[0] == nums[left]) min.shift()
        left++
    }
    
    return right - left
}