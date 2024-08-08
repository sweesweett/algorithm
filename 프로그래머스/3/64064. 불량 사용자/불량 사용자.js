function solution(user_id, banned_id) {
    let regArr= []
    let validReg=0
    let bannedSet=new Set()
    for(let val of banned_id){
        let reg='^'
        let starCount=0
        for(let str of val){
            if(str==='*'){
                starCount++
            }else{
                if(starCount){
                    reg+=`[a-z0-9]{${starCount}}`
                    starCount=0
                }
                reg+=str
            }
        }
        if(starCount){
            reg+=`[a-z0-9]{${starCount}}`
        }
        reg+='$'
        regArr.push(new RegExp(reg))
    }
    let totalArr=Array.from({length:regArr.length},()=>new Set())

    for(let i=0;i<regArr.length;i++){
        let reg= regArr[i]
        let isValid=false
        for(let j=0;j<user_id.length;j++){
            let uid=user_id[j]
            if(reg.test(uid)){
                totalArr[i].add(uid)
                isValid=true
            }
        }
        if(isValid){
            validReg+=1
        }
    }
    recursion(0,new Set())
    return bannedSet.size
   function recursion(idx,set){
       
       if(idx>=totalArr.length){
           if(set.size===validReg){
                let str=[...set].sort().join(' ')
                if(!bannedSet.has(str)){
                    bannedSet.add(str)
                }

           }
          
           return
       }
       if(!totalArr[idx].length){
           recursion(idx+1,set)
       }
       for(let user of totalArr[idx]){
           if(!set.has(user)){
               let newSet = new Set(set)
               newSet.add(user)
               recursion(idx+1,newSet)
           }
       }
   }
}