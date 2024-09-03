function solution(n, roads, sources, destination) {
    let arr=Array.from({length:n+1},()=>[])
    let min=new Array(n+1).fill(Infinity)
    let visited= new Array(n+1).fill(0)
    let ans=[]
    for(let [from,to] of roads){
        arr[to].push(from)
        arr[from].push(to)
    }
  
    let q=[[destination,0]]
    let set= new Set()
    while(q.length){
        let [start,count] =q.shift()
        min[start]=Math.min(count,min[start])
        for(let val of arr[start]){
            if(!set.has(val)){
                q.push([val,count+1])
                set.add(val)
            }
        }
    }
        
    
    return sources.map(el=>min[el]===Infinity?-1:min[el])
    
}