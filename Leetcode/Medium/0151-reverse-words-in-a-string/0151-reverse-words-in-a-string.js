/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr=s.trim().split(' ').filter(el=>el!=='')
    // let left=0
    // let right=arr.length-1
    return arr.reverse().join(' ')
};