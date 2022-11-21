function solution(answers) {
   let answer = [];
    let aa=[1,2,3,4,5]
    let bb=[2,1,2,3,2,4,2,5]
    let cc=[3,3,1,1,2,2,4,4,5,5]
    let obj={1:0,2:0,3:0}
    
    
    for(let i =0 ; i<answers.length;i++){
            if(aa[i%5]===answers[i]){
                obj[1]+=1
            }
       
     
            if(bb[i%8]===answers[i]){
                obj[2]+=1
            }
      
            
        
       
         
            if(cc[i%10]===answers[i]){
                obj[3]+=1
            }
       
            
 
    }
    let max = Math.max(...Object.values(obj))
    for (let key in obj){
        if(obj[key]===max){
            answer.push(Number(key))
        }
    }
    return answer
}