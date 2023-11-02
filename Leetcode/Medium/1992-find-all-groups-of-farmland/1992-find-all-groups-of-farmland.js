/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    let ans=[]
    for(let i=0;i<land.length;i++){
      for(let j=0;j<land[0].length;j++){
        if(land[i][j]===1){
          let arr=[[i,j]]
          dfs(i,j,arr)
          ans.push([...arr[0],...arr.at(-1)])
        }
      }
    }
    function dfs(x,y,arr){
    if(x<0||y<0||x>=land.length||y>=land[0].length||land[x][y]===0){
       return;
    }
    land[x][y]=0
    let [i,j]=arr.at(-1)
    if(x>i||y>j){
      arr.push([x,y])
    }
    dfs(x,y+1,arr)
    dfs(x+1,y,arr)
    dfs(x-1,y,arr)
    dfs(x,y-1,arr)
    
    }
  return ans
};