/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function(pressedKeys) {
    let dp=new Array(pressedKeys.length+1).fill(0)
    dp[0]=1
    dp[1]=1

    for(let i=2;i<=pressedKeys.length;i++){
    let num=pressedKeys[i-1]
    let p=i-1
      while(p>i-5&&num){
        if(p===i-4&&!(num==='7'||num==='9')){
          break
        }
        if(p>=0&&num===pressedKeys[p]){
          dp[i]+=dp[p]
          num=pressedKeys[p]
          p-=1
        }else{
          break
        }

      }
      dp[i]=dp[i]%(10**9 + 7)
    }
    return dp.at(-1)
};