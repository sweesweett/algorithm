/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let count=0
    let length=isConnected.length
    let set = new Set()
    for(let i=0;i<length;i++){
      isConnected[i][i]=0
    }
    let dfs=(idx)=>{
      set.add(idx)
      
      for(let i=0;i<isConnected[idx].length;i++){
          if(isConnected[idx][i]){
             isC=true
             isConnected[idx][i]=0
             isConnected[i][idx]=0
             dfs(i)
            
          }
      }
    }
    for(let i=0;i<isConnected.length;i++){
      if(!set.has(i)){
         dfs(i)
         count++
      }
      
    }
   
    return count
};