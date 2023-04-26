/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false
    }
    let arr= Array(26).fill(0)
    for(let i =0;i<s.length;i++){
        arr[s[i].charCodeAt(0)-97]+=1
        arr[t[i].charCodeAt(0)-97]-=1
    }
      for(let i =0;i<arr.length;i++){
        if(arr[i]!==0){
            return false
        }
    }

    return true
};