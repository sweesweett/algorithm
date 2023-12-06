/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let sum=0
    let row=grid.length,col=grid[0].length
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                grid[i][j]=-1
                sum+=bfs(i,j)
            }
        }
    }
    function bfs(q,w){
        let peri=0
        let queue= [[q,w]]
        let direction=[[0,1],[0,-1],[1,0],[-1,0]]
        while(queue.length){
            let [i,j]=queue.shift()
            for(let [x,y] of direction){
                let left=x+i
                let right=y+j
                if(left>=0&&left<row&&right>=0&&right<col){
                  if(grid[left][right]===1){
                      grid[left][right]=-1
                      queue.push([left,right])
                  }else if(grid[left][right]===0){
                      peri+=1
                  }      
                }else{
                  peri+=1  
                }

            }

        }

        return peri

    }  
    return sum
};