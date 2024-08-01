function solution(bridge_length, weight, truck_weights) {
    let ans=0
    let arr=new Array(bridge_length).fill(0)
    let sum=0
    while(arr.length){
        ans++
        sum-=arr.shift()
        if(!truck_weights.length)continue
        if(sum+truck_weights[0]<=weight){
            let val= truck_weights.shift()
            arr.push(val)
            sum+=val
        }else{
            arr.push(0)
        }
    }
    return ans
}