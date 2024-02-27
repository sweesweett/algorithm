/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {

    let arr=new Array(n+1).fill(false)
    arr[1]=false
    for(let i=2;i<=n;i++){
      for(let j=1;j<i;j++){
        if(i%j===0&&!arr[i-j]){
          arr[i]=true
          break
        }
      }
    }
    return arr[n]
};