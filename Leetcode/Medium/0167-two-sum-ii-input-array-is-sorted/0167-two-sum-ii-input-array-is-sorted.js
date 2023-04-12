/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let right=numbers.length-1
    let left =0
    while(true){
        if(left===numbers.length){
            return []
        }
        if(numbers[right]+numbers[left]===target){
            return [left+1,right+1]
        }
        if(numbers[right]+numbers[left]<target){
            left++
    
        }
        else if(numbers[right]+numbers[left]>target){
            right--
        }



    }
};