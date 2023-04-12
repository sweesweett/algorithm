/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr= s.split(' ')
    for(let i=0;i<arr.length;i++){
        arr[i]=reverseStr(arr[i])
    }
    return arr.join(' ')
};
function reverseStr(str){
    let arr=str.split('')
    let length=arr.length-1;
    for(let i=0; i<arr.length/2;i++){
        let tmp= arr[i]
        arr[i]=arr[length-i]
        arr[length-i]=tmp
    }
    
    return arr.join('')
}