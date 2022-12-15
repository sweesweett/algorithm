function solution(n) {
 let arr=[1,2,3,5]
 if(n<=4){
     return arr[n-1]
 }
  for(let i =4;i<n;i++){
      if(arr[i]===undefined){
          arr[i]=(arr[i-1]+arr[i-2])%1234567
      }
      
  }
    return arr[n-1]
}