/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num= BigInt(digits.join(''))+BigInt(1)
    return String(num).split('')
    
};