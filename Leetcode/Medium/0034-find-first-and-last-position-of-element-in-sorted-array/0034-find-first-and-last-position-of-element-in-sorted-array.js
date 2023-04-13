/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left=0
    let right=nums.length-1
    let middle=-1
   
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]===target){
            middle=mid
            break
        }else if(nums[mid]>target){
            right=mid-1
        }else{
            left=mid+1
        }

    }
    if(middle===-1){
        return [-1,-1]
    }
     let count=[middle,middle]
     left=middle-1
     right=middle+1
    while(true){
        if(nums[middle]!==nums[left]&&nums[middle]!==nums[right]){
            return count
        }

        if(nums[middle]===nums[left]&&left>=0){
            count[0]=left
            left--
        }
        if(nums[middle]===nums[right]&&right<=nums.length-1){
            count[1]=right
            right++
        }



    }
};