/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length){
        return []
    }
    let map = new Map()
    let idx=2
    for(let i=97;i<=122;i+=3){
        if(idx===7||idx===9){
             map.set(idx+'',[String.fromCharCode(i),String.fromCharCode(i+1),String.fromCharCode(i+2),String.fromCharCode(i+3)])
             i++
        }else{
            map.set(idx+'',[String.fromCharCode(i),String.fromCharCode(i+1),String.fromCharCode(i+2)])

        }
     idx++  
    }
    const answer=[]
    const dfs=(value,arr,idx)=>{
        if(idx===digits.length){
            answer.push(value)
            return;
        }
        arr.forEach((val)=>{
            dfs(value+val,map.get(digits[idx+1]),idx+1)
        })
    }
    dfs('',map.get(digits[0]),0)
   return answer
};