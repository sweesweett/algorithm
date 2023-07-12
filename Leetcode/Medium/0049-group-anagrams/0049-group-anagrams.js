/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const answer=[]
    const objj={}
    for(let val of strs){
        const obj={}
        const arr=val.split('')
        arr.sort()
        let key=arr.join('')
        if(objj[key]){
            objj[key].push(val)
        }else{
            objj[key]=[val]
        }


    }
    return Object.values(objj)
};