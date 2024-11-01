/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let count=0
    let char=''
    let ans=''
    for(let val of s){
        if(char===val&&count===2){
            continue
        }
        if(char!==val||!char){
            char=val
            count=1
        }else{
            count++
        }
        ans+=val
    }
    return ans
};