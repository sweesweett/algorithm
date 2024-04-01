function solution(order) {
    let arr= Array.from(new Array(order.length),(_,idx)=>idx+1)
    let stack=[]
    let count=0
    for(let i=0;i<arr.length;i++){
        stack.push(arr[i])
        while(stack.length&&stack.at(-1)===order[count]){
            stack.pop()
            count++
        }
    }
    return count
}
