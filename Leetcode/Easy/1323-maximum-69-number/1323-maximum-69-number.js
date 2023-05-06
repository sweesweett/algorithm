/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let arr= String(num).split('').map(Number)
    arr[arr.indexOf(6)]=9
    return arr.join('')
}