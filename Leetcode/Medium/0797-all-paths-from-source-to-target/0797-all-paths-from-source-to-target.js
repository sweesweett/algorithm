/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let answer=[]
    const dfs=(arr,idx)=>{
        if(idx===graph.length-1){
                answer.push([...arr,idx])
        
            return;
        }
        for(let i=0;i<graph[idx].length;i++){
            dfs([...arr,idx],graph[idx][i])
        }
    }
    dfs([],0)
    return answer
};