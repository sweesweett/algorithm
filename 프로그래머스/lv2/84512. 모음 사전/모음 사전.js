function solution(word) {
const result=[]
for(let i =1;i<=5;i++){
    dfs('',i,result)
    
}
    result.sort()
    return result.indexOf(word)+1
};

function dfs(str,length,result){
    const mo=[...'AEIOU']
    if(str.length===length){
        result.push(str)
        return;
    }
    mo.forEach(el=>{
        dfs(str+el,length,result)
        
    })
    
    
    
}