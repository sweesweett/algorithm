function solution(n, edge) {
    let arr= new Array(n+1).fill(Infinity)
    let visited=new Set()
    let graph=Array.from({length:n+1},()=>[])
    for(let [from,to] of edge){
        graph[from].push(to)
        graph[to].push(from)
    }
    arr[0]=0
    let q=[[1,0]]
    let max=0
    while(q.length){
        let [node,val]=q.shift()
        arr[node]=Math.min(arr[node],val)
        max=Math.max(max,arr[node])
        for(let to of graph[node]){
            if(visited.has(to)){
                continue
            }else{
                q.push([to,val+1])
                visited.add(to)
            }
        }
        
    }
   return arr.filter(el=>el===max).length
}