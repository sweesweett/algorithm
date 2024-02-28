/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let zeroArr=[]
    let oneArr=[]
    let zero;
    let one;
    for(let i=0;i<groups.length;i++){
        if(!zeroArr.length&&groups[i]===0){
            zero=1
        }
        if(!oneArr.length&&groups[i]===1){
          one=0
        }
        if(zero!==groups[i]){
          zeroArr.push(words[i])
          zero=groups[i]
        }
        if(one!==groups[i]){
          oneArr.push(words[i])
          one=groups[i]
        }

    }
    return zeroArr.length>=oneArr.length?zeroArr:oneArr
};