function solution(priorities, location) {
 let dd= priorities[location]

 let arr=[]
 let arr2=[]
 for(let i =0;i<priorities.length;i++){
     if(priorities[i]>dd){
         arr.push(priorities[i])
     }else if(priorities[i]===dd&&i>location){
         arr2.push(i)
     }
 }
    if(arr.length===0){
        return 1
    }
    if(arr2.length===0){
        return arr.length+1
    }
 
    return arr.length+arr2.length
}