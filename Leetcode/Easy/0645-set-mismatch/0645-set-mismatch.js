/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let arr= new Array(nums.length+1).fill(0)
    let answer=[]
    for(let i=0;i<nums.length;i++){
        if(arr[nums[i]]){
            answer.push(nums[i])
            continue
        }
        arr[nums[i]]=1
    }
    for(let i=1;i<arr.length;i++){
        if(!arr[i]){
            answer.push(i)
            return answer
        }
    }
};