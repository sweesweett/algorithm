/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max=0
    const dfs=(x,y)=>{
        if(x<0||y<0||x>=grid.length||y>=grid[0].length||grid[x][y]===0){
            return 0
        }
        grid[x][y]=0
        let ddd=1+dfs(x,y+1)+dfs(x,y-1)+dfs(x+1,y)+dfs(x-1,y)
        return ddd
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                let val=dfs(i,j)
                max= Math.max(val,max)
            }
        }
    }
    return max
};