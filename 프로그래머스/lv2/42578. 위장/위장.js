function solution(clothes) {
   let obj={}
   for(let i=0;i<clothes.length;i++){
       if(obj[clothes[i][1]]!==undefined){
           obj[clothes[i][1]]+=1
       }else{
            obj[clothes[i][1]]=1
       }
   }
    let values=Object.values(obj)
    let answer = values.reduce((a,b)=>a*(b+1),1)
    
    return answer-1
}
function factorial(num){
    
    
}