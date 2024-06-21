/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp= Array.from(new Array(n),()=>new Array(m).fill(0))
    for(let i=0;i<dp.length;i++){
      dp[i][0]=1
    }
    for(let i=0;i<dp[0].length;i++){
      dp[0][i]=1
    }
    for(let i=1;i<dp.length;i++){
      for(let j=1;j<dp[0].length;j++){
        dp[i][j]=dp[i-1][j]+dp[i][j-1]
      }
    }
    return dp[dp.length-1][dp[0].length-1]
};