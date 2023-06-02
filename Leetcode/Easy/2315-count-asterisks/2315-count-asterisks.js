/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let arr=s.split('|')
    ans=0
    for(let i=0;i<arr.length;i+=2){
        let idx=0
        while(idx<arr[i].length){
            if(arr[i][idx]==='*'){
                ans++
            }
            idx++
        } 
    }
    return ans
};