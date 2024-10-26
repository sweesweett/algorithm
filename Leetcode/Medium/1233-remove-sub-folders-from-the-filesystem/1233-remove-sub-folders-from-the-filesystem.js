/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort((a,b)=>a.length-b.length)
    let answer=[]
    let set= new Set()
    for(let val of folder){
        let newArr= val.split('/')
        if(dfs(newArr,0,'',set)){
            answer.push(val)
        }

    }
    return answer
};
function dfs(arr,i,str,set){

    if(set.has(str)){
        return false
    }else{
        if(i>=arr.length){
            set.add(str)
            return true
        }
        let newStr= str+'/'+arr[i]
        return dfs(arr,i+1,newStr,set)
    }
}