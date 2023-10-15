function solution(numbers) {
    let set = new Set()
    let visitedSet= new Set()
    const getPrime=(n)=>{
        if(n===2||n===3){
            return true
        }
     for(let i=5;i<=Math.round(n**0.5);i+=2){
         if(n%i===0){
             return false
         }

     }
     return true
 }

    let recursion=(n,visitedSet)=>{
        let num= Number(n)
        // if(set.has(num)){
        //     return;
        // }
        if(num>=2&&num<=3){
            set.add(num)
        }
        if(num%2&&num%3){
            if(num>1){
                set.add(num)
            }
            
        }

        for(let i=0;i<numbers.length;i++){
            let val= numbers[i]
            if(visitedSet.has(i)){
                continue
            }else{
                 visitedSet.add(i)
                 recursion(n+val,visitedSet)
                 visitedSet.delete(i)
            }
             
     
        }
        
    }
    recursion('',new Set())
    console.log(set)
    if(set.size===0){
        return 0
    }
    let ans=[]
    for(let val of set){
        if(getPrime(val)){
            ans.push(val)
        }
    }
    return ans.length
}