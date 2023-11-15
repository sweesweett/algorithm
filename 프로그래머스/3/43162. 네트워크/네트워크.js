function solution(n, computers) {
    let count=0
    const dfs=(x,y)=>{
        for(let i=0;i<computers[0].length;i++){
            if(i===x||i===y){
                computers[x][i]=0
                continue
            }
            if(computers[x][i]===1){

                 computers[x][i]=0
                 computers[i][x]=0
                 dfs(i,x)
            }
        }
    }
    for(let i=0;i<computers.length;i++){
        for(let j=0;j<computers[0].length;j++){
            if(computers[i][j]){
    
                dfs(i,j)
                count++
            }
        }
    }
    
   return count
    }