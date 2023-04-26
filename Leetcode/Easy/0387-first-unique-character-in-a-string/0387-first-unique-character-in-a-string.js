/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj={}
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]!==undefined){
            obj[s[i]].push(i)

        }else{
            obj[s[i]]=[i]

        }
    }
    let lengthOne=Object.values(obj).filter(el=>el.length===1)
    if(lengthOne.length===0){
        return -1
    }
    return Math.min(...lengthOne.flat())
    
};