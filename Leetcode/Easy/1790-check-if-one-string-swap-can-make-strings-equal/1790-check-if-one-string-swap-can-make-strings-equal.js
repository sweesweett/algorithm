/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1===s2){
        return true
    }
    let dd=[]
    for(let i =0;i<s1.length;i++){
        if(s1[i]!==s2[i]){
            dd.push(i)
        }

    }
    if(dd.length!==2){
        return false
    }else{
        if(s1[dd[0]]===s2[dd[1]]&&s1[dd[1]]===s2[dd[0]]){
            return true
        }
        return false
    }
};