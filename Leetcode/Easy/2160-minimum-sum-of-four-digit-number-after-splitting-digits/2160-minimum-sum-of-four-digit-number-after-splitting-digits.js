/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let arr=String(num).split('').map(Number).sort((a,b)=>a-b)

    return arr[0]*10+arr[3]+arr[1]*10+arr[2]
};