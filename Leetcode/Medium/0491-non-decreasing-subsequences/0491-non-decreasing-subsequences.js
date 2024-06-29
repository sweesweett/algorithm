/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let ans = [];
    
    let backtracking = (arr, start) => {
        if (arr.length >= 2) {
            ans.push(arr)
        }
        if (start >= nums.length) {
            return
        }
        
        let set= new Set()
        for (let i = start; i < nums.length; i++) {
            if (!arr.length || arr[arr.length - 1] <= nums[i]) {
                if (!set.has(nums[i])) {
                    set.add(nums[i])
                    backtracking([...arr,nums[i]], i + 1)

                }
            }
        }
    };
    
    backtracking([], 0);
    return ans;
}