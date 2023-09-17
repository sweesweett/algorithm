/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let val= s.trim().split(' ').join('').toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,'')
    if(!val.length){
        return true
    }
  for (let i = 0, j = val.length - 1; i <= j; i++, j--) {
    if (val[i]!==val[j]) return false;
  }
    return true
};