var closedIsland = function(grid) {
    let count=0
    for(let i=0;i<grid.length;i++){
      for(let j=0;j<grid[0].length;j++){
        if(grid[i][j]===0){
            count+=bfs(i,j,grid)
        }
      }
    }
    return count
};
function bfs(i,j,grid){
    let stack=[[i,j]]
    let rows=grid.length,cols=grid[0].length
    let directions= [[0,1],[1,0],[0,-1],[-1,0]]
    let isTrue=true
    grid[i][j]=1
    while(stack.length){
        let [q,w]=stack.pop()
        for(let [dx,dy] of directions){
            let x=dx+q
            let y=dy+w
            if(x<0||y<0||x>=rows||y>=cols){
                isTrue=false
                continue
            }
            if(grid[x][y]===0){
                grid[x][y]=1
                stack.push([x,y])
            }

        }
    }
    return isTrue?1:0
}

