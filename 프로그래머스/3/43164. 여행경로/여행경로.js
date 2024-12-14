function solution(tickets) {
    let obj={}
    let visited={}

    for(let [depart,land] of tickets){
        if(!obj[depart]){
            obj[depart]=[land]
            visited[depart]=new Set()
        }else{
           obj[depart].push(land) 
        }
    }

    let answer=[]
    let start='ICN'
    let newArr=obj[start]
    for(let i=0;i<newArr.length;i++){
        visited[start].add(i)
        dfs(newArr[i],[start,newArr[i]])
        visited[start].delete(i)              
    }
    if(answer.length===1){
        return answer[0]
    }
    return answer
    function dfs(node,arr,countSet){

        if(!obj[node]||obj[node].length===visited[node].size){
            if(arr.length===tickets.length+1){
                if(!answer.length){
                    answer=arr
                }
                else if(!dicCheck(answer,arr)){
                    answer=arr
                }      
            }
            return
        }
        for(let i=0;i<obj[node].length;i++){
                if(visited[node].has(i)){
                    continue
                }
                visited[node].add(i)
                dfs(obj[node][i],[...arr,obj[node][i]])
                visited[node].delete(i)
            
        }
    }
    
}
function dicCheck(a,b){
    for(let i=0;i<a.length;i++){
        if(a[i].localeCompare(b[i])<0){
            return true
        }else if(a[i].localeCompare(b[i])>0)return false
    }
    return true
    
}