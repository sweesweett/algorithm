function solution(x, y, n) {
    let arr=[]
    let map = new Map()
    let dfs=(val,t)=>{

        if(arr.at(-1)<=t){
            return;
        }
        if(val<x){
            return;
        }
        if(val===x){
            arr.pop()
            arr.push(t)
            return;
        }
        if(map.has(val)){
           if(map.get(val)<=t){
               return;
           }else{
            map.set(val,t)
           }
            
        }else{
            map.set(val,t)
        }
     
        if(val%3===0){
             dfs(val/3,t+1)
        }
        if(val%2===0){
            dfs(val/2,t+1)
        }
        if(val-n>=x){
            dfs(val-n,t+1)
        }
        
        
        
    }
    dfs(y,0)
    return arr.length>0?arr[0]:-1

}