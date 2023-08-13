/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    const arr= String(x).split('')
    for(let i=0;i<arr.length/2;i++){
        if(arr[i]===arr.at(-i-1)){
        }else{
            return false
        }
    }
    return true
};