function solution(n) {
    let memo=[1,1]
    const REST= 1000000007
    for(let i=2;i<=n;i++){
        let sum=(memo[i-2]+memo[i-1])
        if(sum>REST){
            memo[i]=sum%REST
        }else{
             memo[i]=(memo[i-2]+memo[i-1])
        }
       
    }
    return memo[n]
}