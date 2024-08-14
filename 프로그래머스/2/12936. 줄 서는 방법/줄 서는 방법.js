function solution(n, k) {
    let arr=Array.from({length:n},(_,i)=>i+1)
    let factorial = [1,1,2,6];
    let ans=[]
    for(let i=3;i<=n;i++){
        factorial[i]=factorial[i-1]*i
    }
    let total=k
    let multiple=n
    while(total>0&&multiple>=0){
        for(let i=1;i<=multiple+1;i++){
            if(factorial[multiple-1]===undefined){
                ans.push(...arr.splice(i-1,1))
                return ans
            }
            if(factorial[multiple-1]*i>=total){
                ans.push(...arr.splice(i-1,1))
                total-=factorial[multiple-1]*(i-1)
                break
            }
        }
        multiple--  
    }
  return ans
}