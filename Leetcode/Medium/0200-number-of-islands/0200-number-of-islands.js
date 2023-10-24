/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count=0
    const dfs=(x,y)=>{
        if(x<0||y<0||x>=grid.length||y>=grid[0].length||grid[x][y]==="0"){
            return;
        }
        grid[x][y]="0"
        
        dfs(x,y+1)
        dfs(x,y-1)
        dfs(x+1,y)
        dfs(x-1,y)


    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==="1"){
                dfs(i,j)
                count++
            }
        }
    }
    return count
};