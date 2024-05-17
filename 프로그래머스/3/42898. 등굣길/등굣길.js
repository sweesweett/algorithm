function solution(m, n, puddles) {
    let arr=Array.from(new Array(n),()=>new Array(m).fill(0))
    for(let [x,y] of puddles){
        arr[y-1][x-1]=-1
    }
    arr[0][0]=1
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(arr[i][j]===-1){
                arr[i][j]=0
                continue
            }
            if(j>0){
                arr[i][j] += arr[i][j-1]
            }
            if(i>0){
               arr[i][j] += arr[i-1][j]
            }

            
        
            arr[i][j]%=1000000007
            
        }
    }
    return arr[n-1][m-1]
}
