var numEnclaves = function(grid) {
    let sum=0
  for(let i=0;i<grid.length;i++){
      for(let j=0;j<grid[0].length;j++){
          if(grid[i][j]){
              sum+=bfs(grid,[i,j])

              
          }
      }
  }
  return sum
};
  const bfs=(grid,[q,w])=>{
        let [row,col]=[grid.length,grid[0].length]
        let stack=[[q,w]]
        grid[q][w]=0
        let moves=1
        let count=0
        let directions= [[1,0],[0,1],[-1,0],[0,-1]]
        while(stack.length){
            let [i,j]=stack.pop()
            count++
            if(i===0||j===0||i===row-1||j===col-1){
                moves=0
            }
            for(let [dx,dy] of directions){
                let [x,y]=[i+dx,j+dy]
                if(x<0||y<0||x>=row||y>=col){
                    continue
                }
                if(grid[x][y]){
                    grid[x][y]=0
                    stack.push([x,y])
                }
            }
            
            

        }

        return moves?count:0

    }