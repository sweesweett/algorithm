/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
     //javascript 30 days challenge, not algorithm problem
    let dfs=(arr,nn)=>{
        if(nn===n){
            return arr
        }
        let newArr=[]
        for(let val of arr){
            if(Array.isArray(val)){
                newArr.push(...dfs(val,nn+1))
            }else{
                newArr.push(val)
            }

        }
        return newArr
    }
    return dfs(arr,0)
};