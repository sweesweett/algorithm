/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp= Array.from(new Array(word1.length+1),()=>new Array(word2.length+1).fill(0))
    for(let i=1;i<dp.length;i++){
      for(let j=1;j<dp[0].length;j++){
        if(word1[i-1]===word2[j-1]){
          dp[i][j]=dp[i-1][j-1]+1
        }else{
          dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
        }
      }
    }
    let lcs= dp[word1.length][word2.length]
    return word1.length+word2.length-lcs*2
};