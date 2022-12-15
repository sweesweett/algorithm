function solution(n)
{
    let count=0
while(true){
    if(n<=1){
        return count+1
    }
    if(n%2){
        count+=1
        n=(n-1)/2
    }else{
        n/=2
    }
}

    return count+1
}