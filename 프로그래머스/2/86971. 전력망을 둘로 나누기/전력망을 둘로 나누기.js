function solution(n, wires) {
    let lines= new Array(n).fill(1)
    let tree= Array.from({length:n},()=>[])
    let min=Infinity

    for(let i=0;i<wires.length;i++){
        let [from,to]=wires[i]
        tree[from-1].push(to-1)
        tree[to-1].push(from-1)
    }
    const recursion=(node,set)=>{
        set.add(node)
        let sum=lines[node]
        for(let next of tree[node]){
            if(set.has(next)){
                continue
            }
            sum+=recursion(next,set)
        }
        return sum
    }
    for(let [from,to] of wires){
        let val=recursion(to-1,new Set([from-1]))
        let val2=n-val
        if(min>Math.abs(val-val2)){
            min=Math.abs(val-val2)
        }

    }
   return min
}