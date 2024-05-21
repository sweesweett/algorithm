function solution(n, s) {
   if(s<n){
       return [-1]
   }
   let div= Math.floor(s/n)
   let arr= new Array(n).fill(div)
   if(s%n===0){
       return arr
   }
   let num=div*n 
   for( let i= arr.length -1; i>=0;i--){
       if(num===s){
           return arr
       }
       arr[i]+=1
       num+=1
   }
    
}