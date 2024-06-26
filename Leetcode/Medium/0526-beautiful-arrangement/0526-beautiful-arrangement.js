/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
  let count=0
  let arr=new Array(n+1).fill(false)
    let backtracking=(idx)=>{
        if(idx>n){
          count++
          return
        }
        for(let i=1;i<=n;i++){
          if(!arr[i]&&(i%idx===0||idx%i===0)){
            arr[i]=true
            backtracking(idx+1)
            arr[i]=false
          }
         
        }

    }
    backtracking(1)
    return count
};