function solution(rows, columns, queries) {
    var answer = [];
    let visited=Array.from({ length: rows }, (_, i) => Array.from({ length: columns }, (_, j) => i * columns + j + 1))
    for(let query of queries){
        answer.push(makeRect(visited,query))
    }
    return answer;
}
function makeRect(visited,query){
    let [x1,y1,x2,y2]=query
    let [rows,cols]=[visited.length,visited[0].length]
     let [forward,backward]=[visited[x1][y1-1],visited[x2-2][y2-1]]
     let min=Math.min(forward,backward)
    for(let i=y1-1;i<y2;i++){
        min=Math.min(forward,backward,min) 
        let tmp=visited[x1-1][i]
        visited[x1-1][i]=forward
        forward=tmp
        
    }
    for(let j=y2-1;j>=y1-1;j--){
        min=Math.min(forward,backward,min) 
       let tmp=visited[x2-1][j]
       visited[x2-1][j]=backward
       backward=tmp
      
        
    }
    for(let i=x1;i<x2-1;i++){
        min=Math.min(forward,backward,min) 
        let tmp=visited[i][y2-1]
        visited[i][y2-1]=forward
        forward=tmp
    }
    for(let i=x2-2;i>=x1;i--){
        min=Math.min(forward,backward,min) 
        let tmp=visited[i][y1-1]
        visited[i][y1-1]=backward
        backward=tmp
    }
    return min

}

