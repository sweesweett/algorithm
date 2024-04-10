function solution(land) {
    if(land.length===1&&land[0].length===1){
        return land[0][0]
    }
    let map= new Array(land.length*land[0].length).fill(0)
//     const dfs=(x,y,num)=>{
//         if(x<0||y<0||x>=land.length||y>=land[0].length||land[x][y]!==1){
//             return
//         }

//         land[x][y]=num
//         map[land[x][y]]+=1
//         dfs(x+1,y,num)
//         dfs(x-1,y,num)
//         dfs(x,y+1,num)
//         dfs(x,y-1,num)
//     }
    const bfs=(i,j,num)=>{
        let directions=[[0,0],[1,0],[0,1],[-1,0],[0,-1]]
        let stack=[[i,j]]
        let count=0
        while(stack.length){
            let [p,q]= stack.pop()
            for(let [nx,ny] of directions){
                let x= p+nx,y=q+ny
                 if(x<0||y<0||x>=land.length||y>=land[0].length||land[x][y]!==1){
                    continue
                }
                land[x][y]=num
                count++
                stack.push([x,y])
            }
            
        }
        map[num]=count
        return;
        
    }
    
    
    
    let num=5
    let max=0
    for(let i=0;i<land[0].length;i++){
        let set=new Set()
        let sum=0
        for(let j=0;j<land.length;j++){
            if(land[j][i]!==0){
                if(land[j][i]===1){
                    bfs(j,i,num)
                    num++
                }
                if(!set.has(land[j][i])){
                    sum+=map[land[j][i]]
                    set.add(land[j][i])
                }
                
                
            }
        }

        max=Math.max(sum,max)
    }
   
    return max
}