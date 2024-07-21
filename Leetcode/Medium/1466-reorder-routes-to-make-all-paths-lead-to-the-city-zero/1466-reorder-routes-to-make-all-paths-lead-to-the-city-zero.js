/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let forward=Array.from( new Array(n),()=>[])
    let backward=Array.from( new Array(n),()=>[])
    let visited=new Set()
    for(let [x,y] of connections){
        forward[x].push(y)
        backward[y].push(x)


    }

    let ans=0
    let dfs=(num)=>{
      if(visited.has(num)){
        return
      }
      visited.add(num)
      for(let val of forward[num]){
          if(!visited.has(val)){
            ans++
            dfs(val)
          }
      }
      for(let val of backward[num]){
        if(!visited.has(val)){
          dfs(val)
        }
      }
    }
    dfs(0)
    return ans
};