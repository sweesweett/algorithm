function solution(enroll, referral, seller, amount) {
   let obj={}
   let obj2={}
   for(let i=0;i<enroll.length;i++){
       obj[enroll[i]]=referral[i]
   }
   for(let i=0;i<enroll.length;i++){
       obj2[enroll[i]]=0
   }
    for(let i=0;i<seller.length;i++){
        let seed= amount[i]*100
        let name= seller[i]
        while(seed>0&&name!=='-'){
            obj2[name]+=seed-Math.floor(seed/10)
            name=obj[name]
            seed=Math.floor(seed/10)
            
        }
    }
    
   return enroll.map(el=>obj2[el])
}
