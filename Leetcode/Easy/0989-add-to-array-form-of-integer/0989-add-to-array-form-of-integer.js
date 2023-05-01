/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let newN= BigInt(num.join(''))
    let newK= BigInt(k)
    return String(newN+newK).split('')
    
};