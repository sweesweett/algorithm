function solution(strings, n) {
// function recursion(a,b,n){
//     console.log(n)
    
// }
    return strings.sort((a,b)=>{
         if(a[n]>b[n]){
            return 1
        }else if(a[n]<b[n]){
            return -1
        }else{
           if(a<b){
               return-1
           }else{
               return 1
           }
        }
    
    
    
    
})
}