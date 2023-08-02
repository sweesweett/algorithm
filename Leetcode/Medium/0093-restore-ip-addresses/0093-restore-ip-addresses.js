/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let answer=[]
    let set = new Set()
    const dfs=(str,i)=>{
        if(set.has(str)){
            return;
        }
        let arr= str.split('.')
        if(arr.length>4){
            return;
        }
        if(arr.at(-1).length>1&&arr.at(-1)[0]==='0'){
            return;
        }
        if(i>=s.length){
            if(arr.length===4){
                answer.push(str)
                set.add(str)
            }
            
            return;
        }
        if(i!==0){
            str+='.'
        }
      if(Number(s.substring(i,i+3))<=255){
           dfs(str+s.substring(i,i+3),i+3)
      }  
       dfs(str+s[i],i+1)
        dfs(str+s.substring(i,i+2),i+2)
        return;  
    }
    dfs('',0)
    return answer
};