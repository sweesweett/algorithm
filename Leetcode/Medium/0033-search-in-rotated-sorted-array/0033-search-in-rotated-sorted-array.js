/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left= 0
    let right= nums.length-1
    if(nums.length===1){
        return target===nums[0]?0:-1
    }
    while(nums[left]>=nums[right]){
        left--
        right--
        if(left===-1){
            left+=nums.length
        }
       
    }
    let val= nums.length-right-1
    let arr= nums.slice(left).concat(nums.slice(0,right+1))
    left=0
    right= nums.length-1
    while(left<right){
        if(arr[left]===target){
            return (nums.length+left-val)%nums.length
        }
        if(arr[right]===target){
            return (nums.length+right-val)%nums.length
        }
        let middle= Math.floor((left+right)/2)
        if(middle===left||middle===right){
            return -1
        }
         if(arr[middle]===target){
            return (nums.length+middle-val)%nums.length
        }
        if(target<arr[middle]){
            right=middle
        }
        else if(target>arr[middle]){
            left= middle
        }

    }
    return -1
};