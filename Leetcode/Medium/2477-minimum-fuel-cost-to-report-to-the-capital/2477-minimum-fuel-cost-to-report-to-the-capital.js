/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    if(!roads.length){
      return 0
    }
    let ans = 0;
    let arr=Array.from(new Array(roads.length+1),()=>[])
    for(let[s,d] of roads ){
      arr[s].push(d)
      arr[d].push(s)
    }
      const dfs = (node, p) => {
        let def= 1
        for(let val of arr[node]){
          if(val!==p){
              def+= dfs(val,node)
          }
        }
        if(p===-1){
          return ans
        }else{
           ans +=Math.ceil(def/seats)
        }
        return def
    };
  return dfs(0, -1);
};