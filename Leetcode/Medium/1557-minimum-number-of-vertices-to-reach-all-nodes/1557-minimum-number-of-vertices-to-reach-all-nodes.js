/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let visited=new Array(n).fill(0)
    let answer=[]
    for(let [_,d] of edges){
        visited[d]+=1
    }
    for(let i=0;i<visited.length;i++){
        if(!visited[i]){
            answer.push(i)
        }
    }
    return answer
   
    
};