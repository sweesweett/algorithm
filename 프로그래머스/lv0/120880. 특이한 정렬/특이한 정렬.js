function solution(numlist, n) {
    return numlist.sort((a,b)=> {
        
       if( Math.abs(n-a)===Math.abs(n-b)){
           if(a>b){
               return -1
           }else{
               return 1
           }
       }else{
           return  Math.abs(n-a) - Math.abs(n-b)
       }
    
    
    
    })
}