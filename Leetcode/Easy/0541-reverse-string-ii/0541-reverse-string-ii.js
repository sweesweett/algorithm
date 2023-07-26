/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let answer=''
    let val=0
    for(let i=0;i<s.length;i++){
       if(i===0){
           answer+=reverseLetters(s.slice(0,k))
           i+=(k-1)
           val+=k
       }else if(i===val+k){
           answer+=reverseLetters(s.slice(i,i+k))
           i+=(k-1)
           val+=2*k
       }else{
           answer+=s[i]
       }
    }
    return answer
};
function reverseLetters(str){
let answer=''
for(let i=str.length-1;i>=0;i--){
    answer+=str[i]
}
return answer
}