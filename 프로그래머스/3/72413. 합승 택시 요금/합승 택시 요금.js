class PriorityQueue{
    constructor(){
        this.queue=[]
        
    }
    push(value,priority){
        this.queue.push({value,priority})
        this.sort()
    }
    shift(){
     return this.queue.shift()   
        
    }
    sort(){
        this.queue.sort((a,b)=>a.priority-b.priority)
    }
    size(){
        return this.queue.length
    }
}
function dijkstra(n, nodes, start){
    let arr = new Array(n+1).fill(Infinity)
    arr[start]=0
    let pq= new PriorityQueue()
    pq.push(start,0)
    while(pq.size()){
        let {value:node,priority:fare}=pq.shift()
        if(fare>arr[node])continue
        for(let [nextNode,nextfare] of nodes[node]){
            let total= fare+nextfare
            if(total<arr[nextNode]){
                arr[nextNode]=total
                pq.push(nextNode,total)
            }
        }
    }
    return arr
}
function solution(n, s, a, b, fares) {
    let nodes= Array.from({length:n+1},()=>[])
    for(let [to,from,fare] of fares){
        nodes[to].push([from,fare])
        nodes[from].push([to,fare])
    }
   let sD=dijkstra(n, nodes, s)
   let aD=dijkstra(n, nodes, a)
   let bD=dijkstra(n, nodes, b)
   let answer=Infinity
   for(let i=1;i<=n;i++){
       answer= Math.min(answer,sD[i]+aD[i]+bD[i])
   }

   return answer
}