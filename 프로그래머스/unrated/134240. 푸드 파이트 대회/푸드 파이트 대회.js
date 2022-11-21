function solution(food) {
    let obj={}
    let answer='0'
    for(let i =0;i<food.length;i++){  
        obj[i]=food[i]
    }
 
    for(let key in obj){
        obj[key]=Math.floor(obj[key]/2)
    }
   
    for(let i=food.length-1;i>=1;i--){
        
        if(obj[i]!==0){
            answer=`${String(i).repeat(obj[i])}${answer}${String(i).repeat(obj[i])}`
            
        }

        
    }
    return answer
}