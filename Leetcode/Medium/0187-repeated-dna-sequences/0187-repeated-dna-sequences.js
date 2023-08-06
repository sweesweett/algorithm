/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let map= new Map()
    let answer=[]
    for(let i=0;i<s.length;i++){
        let str=s.substring(i,i+10)
        if(str.length<10){
            break
        }
        if(map.has(str)){
            map.set(str,map.get(str)+1)
        }else{
            map.set(str,1)
        }

    }
   map.forEach((value,key)=>{
       if(value>=2){
           answer.push(key)
       }

   })
   return answer
};