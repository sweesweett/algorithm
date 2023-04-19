/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length===0){
        return 0
    }
    let max=[]
    let map=new Map()
    let left=0
    while(left<s.length){
      let isCleared=true
        for(let i =left;i<s.length;i++){
         if(!map.has(s[i])){
            map.set(s[i],i)
        }else{
            left=map.get(s[i])+1
            isCleared=false
            max.push(map.size)
            map.clear()
            break
            
        }
        }
        if(isCleared){
            break
        }
    }
    if(map.size>0){
        max.push(map.size)
    }
    return Math.max(...max)
};