/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    let ans=0
    for(let i=1;i<=n;i++){
      let pow=i**2
      if(isPunishmentNumber(pow)){
        ans+=pow
      }
    }
    return ans
};
 isPunishmentNumber=(num)=>{
    isPunishment=false
    let toStr=num.toString()
    let backtracking=(start,sum)=>{
      if(isPunishment){
        return
      }
      if(start>=toStr.length){
        if(sum===num**0.5){
          isPunishment=true
        }
        return
      }
      for(let i=start;i<toStr.length;i++){
        backtracking(i+1,sum+Number(toStr.substring(start,i+1)))
      }
    }
    backtracking(0,0)
    return isPunishment

 }