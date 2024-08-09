function solution(n, computers) {
    let count=0
    let visited=new Array(n).fill(false)
    const dfs=(idx)=>{
        if(visited[idx]){
            return
        }
        visited[idx]=true
        for(let i=0;i<computers[idx].length;i++){
            if(computers[idx][i]&&!visited[i]){
                dfs(i)
    
            }
            
        }

    }
    for(let i=0;i<n;i++){
        computers[i][i]=0
    }
    for(let i=0;i<n;i++){
        if(!visited[i]){
            dfs(i)
            count++
        }
    }
    return count
    }