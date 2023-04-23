/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let repeat=1
    while(repeat<s.length){
        if(s.length%repeat===0){
            let dd=s.slice(0,repeat).repeat(s.length/repeat)
            if(dd===s){
                return true
            }
        }   
        repeat++
    }
    return false
};