/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let arr=s.split(' ')
    if(arr.length!==pattern.length){
        return false
    }
    let map = new Map()
    let map2= new Map()
    let idx=0
    for(let i=0;i<arr.length;i++){

       if(map.has(pattern[i])&&map2.has(arr[i])){
           if(map.get(pattern[i])!==map2.get(arr[i])){
               return false
           }
       }else if (!map.has(pattern[i])&&!map2.has(arr[i])){
            map.set(pattern[i],idx)
            map2.set(arr[i],idx)
            idx++

       }else{
           return false
       }
    }
    return true
};