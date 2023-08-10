/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort()
    let set = new Set()
    let max=''
    for(let val of words){
        if(set.has(val.slice(0,-1))){
            set.add(val)
            max= compareWords(max,val)
        }else{
            if(val.length===1){
                set.add(val)
                 max= compareWords(max,val)
            }
            


        }
    }
    return max

    function compareWords(origin,compare){
          if(origin.length<compare.length){
                return compare
            }else if(origin.length===compare.length){
                if(max.localeCompare(origin)<0){
                    return compare
                }


            }

        return origin
    }

};