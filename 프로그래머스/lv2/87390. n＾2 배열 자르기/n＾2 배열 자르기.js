function solution(n, left, right) {
    let arr=[]
    
    for(let i =left;i<=right;i++){
       
        if(i<n){
         arr.push(i+1)
            
        }else{
        if((i+1)%n===0){
            arr.push(n)
        }
        else if(Math.floor((i+1)/n)>=(i+1)%n){
            arr.push(Math.floor((i+1)/n)+1)
        }else{
           
                arr.push((i+1)%n)  
          
                  
    }
        }
    }
    return arr
}