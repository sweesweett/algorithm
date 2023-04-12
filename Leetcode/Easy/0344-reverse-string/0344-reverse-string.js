/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
       let length=s.length-1
    for(let i=0;i<s.length/2;i++){
    
        let tmp=s[i]
        s[i]=s[length-i]
        s[length-i]=tmp
        
    }
};