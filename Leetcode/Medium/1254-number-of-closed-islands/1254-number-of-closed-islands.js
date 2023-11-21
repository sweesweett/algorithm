var closedIsland = function(grid) {
  let count=0
  let [row,col]=[grid.length,grid[0].length]
    const dfs=(x,y)=>{
      if(x<0||y<0||x>=row||y>=col){
         return false
      }
      if(grid[x][y]===1){
         return true
      }
      grid[x][y]=1 
      let [up,down,left,right]=[dfs(x-1,y),dfs(x+1,y),dfs(x,y-1),dfs(x,y+1)]
      return up&&down&&left&&right
    }
    for(let i=0;i<row;i++){
      for(let j=0;j<col;j++){
        if(grid[i][j]===0&&dfs(i,j)){
            count++
        }
      }
    }
    return count
};