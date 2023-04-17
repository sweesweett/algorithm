/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  let map= new Map()
  for(let i=0;i<order.length;i++){
      map[order[i]]=i
  }
  let count=0
  let count2=0
  
  while(true){
      let isSorted=true
    for(let i =0;i<words.length-1;i++){
        if(words.length===1){
            return false
        }
        if(words[i][count]===undefined&&words[i+1][count]===undefined){
          return true
        }else if(words[i][count]&&words[i+1][count]===undefined){
            return false
        }
        if(map[words[i][count]]>map[words[i+1][count]]){
            return false
        }
        else if(map[words[i][count]]===map[words[i+1][count]]){
            isSorted=false
        }
    }
   
    if(isSorted){
        return true
    }
    count++
  }  
};