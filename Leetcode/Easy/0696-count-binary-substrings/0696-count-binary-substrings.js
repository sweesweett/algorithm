/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let count=0
    let prev=''
    let curr=''
    let prevVal=0
    let currVal=0
    let i=0
    while(i<=s.length){
        let val=s[i]
        if(val!==curr){
            prev=curr
            curr=val
            if(prev!==''){
             count+=Math.min(currVal,prevVal)
            }
            prevVal=currVal
            currVal=1
            
        }else{
            currVal+=1

        }
        i++
    }
   return count
};