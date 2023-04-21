/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let filter=[]
  for(let i=0;i<haystack.length;i++){
    if(haystack[i]===needle[0]){
      filter.push(i)
    }
  }
  let idx=0
  while(true){
    let left=filter[idx]
    let isFound= true
    if(left===undefined){
      return -1
    }
    for(let i =left;i<left+needle.length;i++){
      if(haystack[i]!==needle[i-left]){
        idx++
        isFound=false
        break
      }
    }
    if(isFound){
        return left
    }

  }

};