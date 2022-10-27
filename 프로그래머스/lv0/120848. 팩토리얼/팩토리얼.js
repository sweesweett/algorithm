function solution(n) {
    let result =1
    let newN= 1
    while(true){
       newN=newN*result
         if(newN>n){
             return result-1
         } 
       result++
      
   
    }
    }