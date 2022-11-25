function solution(id_list, report, k) {
    let obj1={}
    let obj2={}
    let answer=[]
    for(let i =0;i<id_list.length;i++){
        obj1[id_list[i]]=[]
        obj2[id_list[i]]=0
    }
   
    for(let i =0;i<report.length;i++){
        let [a,b]=report[i].split(' ')
        if(!obj1[b].includes(a)){
        obj1[b].push(a)
        }
    }
  
  for(let key in obj1){
    if(obj1[key].length>=k){
        obj1[key].forEach(el=>{
            obj2[el]+=1
          
        })
    }
  }
  
    return Object.values(obj2)
}