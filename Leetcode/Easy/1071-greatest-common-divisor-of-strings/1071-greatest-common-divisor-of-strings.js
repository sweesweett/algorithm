/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
   let gcdVal=gcd(str1.length,str2.length)
   let leftVal=str1.repeat(Math.ceil(str2.length/gcdVal))
   let rightVal=str2.repeat(Math.ceil(str1.length/gcdVal))
   if(leftVal!==rightVal){
       return ''
   }
   return str1.slice(0,gcdVal)
}
    
function gcd(length1,length2){
    let p=Math.min(length1,length2)
    let q=Math.max(length1,length2)
    while(q%p>0){
        let tmp=q%p
        q=p
        p=tmp

    }
    return p
}
