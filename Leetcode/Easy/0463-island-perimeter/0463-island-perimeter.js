/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let sum=0
    const dfs=(x,y,prev)=>{
        if(x<0||y<0||x>=grid.length||y>=grid[0].length){
            if(prev){
                sum+=1
            }
            return;
        }
        if(grid[x][y]===-1){
            return;
        }
        if(prev&&grid[x][y]===0){
            sum+=1
            return;
        }
        let val=grid[x][y]
        if(grid[x][y]===1){
            grid[x][y]=-1
        }
      
        dfs(x-1,y,val)
        dfs(x,y-1,val)
        dfs(x+1,y,val)
        dfs(x,y+1,val)
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]){
                dfs(i,j)
                break
            }
        }
    }
    return sum
};