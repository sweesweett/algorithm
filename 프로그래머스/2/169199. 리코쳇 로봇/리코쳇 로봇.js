function solution(board) {
    let q=[]
    let min= Infinity
    let directions=[[1,0],[0,1],[-1,0],[0,-1]]
    let visited=Array.from({length:board.length},()=>new Array(board[0].length).fill(false))
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]==='R'){
               q.push([[i,j],0])
                visited[i][j]=true
                break
            }
        }
    }
    let y=0
    while(q.length){
        let[[j,k],count]=q.shift()
        for(let i=0;i<directions.length;i++){
            let [dx,dy]=directions[i]
            let [x,y]=[j,k]
            while(true){
                if(x+dx>=0&&x+dx<board.length
                   &&y+dy>=0&&y+dy<board[0].length
                   &&board[x+dx][y+dy]!=='D'){
                    x+=dx
                    y+=dy
                }else{
                    break
                }
            }
            if(board[x][y]==='G'){
                return count+1
            }
            if(!visited[x][y]){
                visited[x][y]=true
                q.push([[x,y],count+1])
            }
        }
        
    }
    return -1
}


