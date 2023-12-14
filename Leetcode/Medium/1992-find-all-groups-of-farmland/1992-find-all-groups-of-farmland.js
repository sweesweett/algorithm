/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    let ans=[]
    for(let i=0;i<land.length;i++){
      for(let j=0;j<land[0].length;j++){
        if(land[i][j]===1){
          land[i][j]===0
          ans.push([i,j,...bfs(i,j,land)])

        }
      }
    }
    return ans
}
    function bfs(i,j,land){
        let arr=[[i,j]]
        let stack=[[i,j]]
        let row=land.length-1,col=land[0].length
        let direction=[[0,1],[1,0],[0,-1],[-1,0]]
        while(stack.length){
        let [q,w]=stack.pop()
        for(let [dx,dy] of direction){
            let x= q+dx
            let y=w+dy
            if(x<0||y<0||x>row||y>col){
                continue
            }
            if(land[x][y]){
               land[x][y]=0
               stack.push([x,y])
               let [l,r]=arr.at(-1)
               if(l<x||r<y){
                   arr.push([x,y])
               }
            }
  

        }
        }

        return arr.at(-1)

    }
