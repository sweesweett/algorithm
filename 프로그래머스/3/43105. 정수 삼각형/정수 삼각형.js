function solution(triangle) {
    let arr=Array.from(new Array(triangle.length),(_,i)=>new Array(i+1).fill(0))
    arr[0][0]=triangle[0][0]
    for(let i=1;i<triangle.length;i++){
        for(let j=0;j<triangle[i].length;j++){
           let left=arr[i-1][j-1]??0
           let right=arr[i-1][j]??0
           arr[i][j]=triangle[i][j]+Math.max(left,right)        
        }
    }
    return Math.max(...arr[arr.length-1])
}