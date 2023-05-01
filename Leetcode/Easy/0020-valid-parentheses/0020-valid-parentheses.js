/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2){
        return false
    }
    let idx=1
    let obj={
        '(':')',
        '[':']',
        '{':'}'
    }
    let arr=[s[0]]
    while(idx<s.length){
        if(obj[arr[arr.length-1]]===s[idx]){
            arr.pop()
        }else{
            arr.push(s[idx])

        }
        idx++
    }
   return arr.length===0?true:false
};