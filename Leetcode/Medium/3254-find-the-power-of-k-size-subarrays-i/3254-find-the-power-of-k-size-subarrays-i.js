/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    let isSortedArr=new Array(nums.length-k+1).fill(-1)
    if(k===1){
        return nums
    }
    for(let i=0;i<=nums.length-k;i++){
        let subArr=nums.slice(i,i+k)
        if(i===0){
            isSortedArr[i]=isSorted(subArr,k)
            continue
        }
        if(isSortedArr[i-1]!==-1){
            if(nums[i-2+k]+1===nums[i+k-1]){
                isSortedArr[i]=nums[i+k-1]
            }
        }else{
             if(nums[i-2+k]+1===nums[i+k-1]){
                isSortedArr[i]= isSorted(subArr,k)
             }

        }
    }
    return isSortedArr
};
function isSorted(arr,k){
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]+1){
            return -1
        }
    }
    return arr.at(-1)
}