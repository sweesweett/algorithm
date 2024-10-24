class PriorityQueue{
    constructor(initial){
        this.queue=[]
        
        if(initial){
            let {value,priority}=initial
            this.queue.push({value,priority})
        }
        
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
    get length(){
        return this.queue.length
    }
}

function solution(N, road, K) {
    let arr= new Array(N+1).fill(Infinity)
    arr[1]=0
    let nodes= Array.from({length:N+1},()=>[])
    let pq= new PriorityQueue({value:1,priority:0})
    for(let [to,from,fare] of road){
        nodes[to].push([from,fare])
        nodes[from].push([to,fare])
    }
    while(pq.length){
        let {value:node,priority:fare}=pq.shift()
        if(fare>arr[node])continue
        for(let [next,nextFare] of nodes[node]){
            let totalFare=fare+nextFare
            if(totalFare<arr[next]){
                arr[next]=totalFare
                pq.push(next,totalFare)
            }
            
        }
    }
    return arr.filter((el)=>el<=K).length
}