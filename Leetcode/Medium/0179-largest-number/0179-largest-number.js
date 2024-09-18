/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if(Number(nums.join(''))===0){
        return '0'
    }
    nums.sort((a,b)=>{
        let A=Number(a+String(b))
        let B=Number(b+String(a))
        if(A>B){
            return -1
        }
        return 1
       
    })
    return nums.join('')
};  