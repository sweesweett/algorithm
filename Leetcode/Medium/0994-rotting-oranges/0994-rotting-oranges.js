
var orangesRotting = function(grid) {
    let directions=[[0,1],[1,0],[0,-1],[-1,0]]
    let visited= Array.from(new Array(grid.length),()=>new Array(grid[0].length).fill(false))
    let set= new Set()
    let total=0
    let stack=[]
    let rotten;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===2){
                rotten=true
                stack.push([[i,j],0])
                visited[i][j]=true
            }
            if(grid[i][j]===1){
                set.add([i,j])
            }
        }
    }
    while(stack.length){
        let [[i,j],minute]=stack.shift()
        total=Math.max(total,minute)
        for(let [dx,dy] of directions){
            let[x,y]=[dx+i,dy+j]
            if(x<0||y<0||x>=grid.length||y>=grid[0].length||grid[x][y]!==1||visited[x][y]){
                continue
            }
             visited[x][y]=true
            stack.push([[x,y],minute+1])
        }
    }
    for(let [x,y] of set){
        if(!visited[x][y]){
            return -1
        }
    }
    return total
};