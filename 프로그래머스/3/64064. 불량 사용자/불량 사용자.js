function solution(user_id, banned_id) {
    let regMap= new Map()
    let bannedRegMap=new Map()
    let validReg=0
    let bannedSet=new Set()
    for(let val of banned_id){
        regMap.set(new RegExp(`^${val.replaceAll('*','[a-z0-9]')}$`),val)
        bannedRegMap.set(val,new Set())
    }
    for(let [key,value] of regMap){
        let isValid=false
        for(let j=0;j<user_id.length;j++){
            let uid=user_id[j]
            if(key.test(uid)){
                bannedRegMap.get(value).add(uid)
                isValid=true
            }
        }
        if(isValid){
            validReg+=1
        }
    }

   function recursion(idx,set){
       
       if(idx>=banned_id.length){
           if(set.size===validReg){
                let str=[...set].sort().join(' ')
                if(!bannedSet.has(str)){
                    bannedSet.add(str)
                }
           }
          
           return
       }
       if(!bannedRegMap.get(banned_id[idx]).size){
           recursion(idx+1,set)
       }
       for(let user of bannedRegMap.get(banned_id[idx])){
           if(!set.has(user)){
               let newSet = new Set(set)
               newSet.add(user)
               recursion(idx+1,newSet)
           }
       }
   }
    
    recursion(0,new Set())
    return bannedSet.size  
}