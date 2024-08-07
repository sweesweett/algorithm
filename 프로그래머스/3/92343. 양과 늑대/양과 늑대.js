class Q{
    arr=[]
    front=0
    rear=0
    push(item){
        this.arr.push(item)
        this.rear++
    }
    shift(){
        return this.arr[this.front++]
    }
    isEmpty(){
        return this.front===this.rear
    }
}
function buildTree(info,edges){
    let arr=Array.from({length:info.length},()=>[])
    for(let [from,to] of edges){
        arr[from].push(to)
    }
    return arr
}
function solution(info,edges){
    let tree= buildTree(info,edges)
    let q=new Q()
    let max=0
    q.push([0,1,0,new Set])
    while(!q.isEmpty()){
        let [current,sheep,wolf,visited]=q.shift()
        max=Math.max(max,sheep)
        for(let node of tree[current]){
            visited.add(node)
        }
        for(let node of visited){
            if(info[node]){
                if(sheep!==wolf+1){
                    let newVisited=new Set(visited)
                    newVisited.delete(node)
                    q.push([node,sheep,wolf+1,newVisited])
                }
            }else{
                let newVisited= new Set(visited)
                newVisited.delete(node)
                q.push([node,sheep+1,wolf,newVisited])
            }
        }
        
    }
    return max
}