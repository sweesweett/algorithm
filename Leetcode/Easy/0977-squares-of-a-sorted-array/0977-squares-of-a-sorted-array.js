/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const arr= nums.map(el=>Math.pow(el,2))
    let left=0
    let right=1
    let isSorted=true
    while(true){
        if(right===arr.length&&!isSorted){
            left=0
            right=1
            isSorted=true
        }
        if(right===arr.length&&isSorted){
            return arr
        }
        if(arr[left]>arr[right]){
            let tmp= arr[left]
            arr[left]=arr[right]
            arr[right]=tmp
            left++
            right=left+1
            isSorted=false
        }else{
            right++
        }  
    }
};