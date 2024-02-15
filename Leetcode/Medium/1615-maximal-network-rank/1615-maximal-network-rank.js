/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    if(!roads.length){
      return 0
    }
    let arr= Array.from({length:n},()=>Array(n).fill(0))
    let graphArr= new Array(n).fill(0)
    for(let [s,l]of roads){
      arr[s][l]=1
      arr[l][s]=1
      graphArr[s]+=1
      graphArr[l]+=1
    }
    let max=0

    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        if(i===j){
          continue
        }
        let total=0
        if(arr[i][j]||arr[j][i]){
          total-=1
        }
        total+= graphArr[i]+graphArr[j]

        max=Math.max(total,max)
      }
      
    }
    return max
};