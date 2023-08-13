/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans=''
    for(let i=0;i<strs[0].length;i++){
        let prev=strs[i]
        for(let j=0;j<strs.length;j++){
            if(j===0){
                prev=strs[j][i]
            }
            else if(prev!==strs[j][i]){
                return ans
            }
        }
        ans+=strs[0][i]
    }
    return ans
};