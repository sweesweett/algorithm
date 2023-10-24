/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let sum=0
    const dfs=(x,y)=>{
        if(x<0||y<0||x>=grid.length||y>=grid[0].length||grid[x][y]===0){
           return 1
        }
        if(grid[x][y]===-1){
            return 0
        }
        grid[x][y]=-1
        return dfs(x-1,y)+dfs(x,y-1)+dfs(x+1,y)+dfs(x,y+1)
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]){
                sum+=dfs(i,j)
                break
            }
        }
    }
    return sum
};