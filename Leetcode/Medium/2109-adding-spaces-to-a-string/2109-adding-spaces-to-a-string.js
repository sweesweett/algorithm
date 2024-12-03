/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let answer=''
    let prev;
    for(let val of spaces){
        if(prev===undefined){
            answer+=s.slice(0,val)+' '
            prev=val
            continue
        }
        answer+=s.slice(prev,val)+' '
        prev=val
    }
    answer+=s.slice(prev)
    return answer
};