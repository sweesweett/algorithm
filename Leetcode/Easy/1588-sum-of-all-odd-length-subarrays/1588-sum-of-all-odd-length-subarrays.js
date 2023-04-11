/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let odd=1
    let sum=0
    while(odd<=arr.length){
        for(let i =0;i<=arr.length-odd;i++){
            let newArr=arr.slice(i,i+odd)
            sum+=newArr.reduce((a,b)=>a+b,0)
        }
        odd+=2
    }
    return sum
};