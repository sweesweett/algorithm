function solution(n) {
    let arr=[0,1,1,2]
    if(n<4){
        return arr[n]
    }
    for(let i =4;i<=n;i++){
        arr[i]=(arr[i-1]+arr[i-2])%1234567
    }
   return arr[n]
}