function solution(skill, skill_trees) {
let obj={}
    
    for(let i=0;i<skill.length;i++){
    obj[skill[i]]=i
}
let count=0
  for(let i of skill_trees){
      let isSkilled=true
      let now =-1
      for(let j of i){
          if(obj[j]<now&&obj[j]!==undefined){
                
              isSkilled=false
              break
          }
          else if(now===-1&&obj[j]>0){
              isSkilled=false
              break
          }
          else if(obj[j]-now>=2&&obj[j]!==undefined){
            isSkilled=false
           break
          }else if (obj[j]>=now&&obj[j]!==undefined){
                 now=obj[j]
          }
      }
      if(isSkilled){
          count++
      }
      
  }  
    return count
}