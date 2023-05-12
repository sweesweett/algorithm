/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let arr=[]
    if(k===0){
        let max=0
        let count=0
        for(let i=0;i<nums.length;i++){
            
            if(nums[i]===1){
                count++
            }else{
                max=Math.max(count,max)
                count=0
            }
        }
        return Math.max(count,max)
    }
    for(let i =0;i<nums.length;i++){
        if(nums[i]===0){
            arr.push(i)
        }
    }
    let max=k>0?arr[k]-1:0
    if(k===nums.length){
        return k
    }
    if(k>=arr.length){
        return nums.length
    }
    for(let i=k+1;i<arr.length;i++){
        if(i===arr.length-1){
             max=Math.max(nums.length-arr[i-k]-1,max)
        }else{
             max=Math.max(arr[i]-arr[i-(k+1)]-1,max)
        }
      

    }
    return max
};