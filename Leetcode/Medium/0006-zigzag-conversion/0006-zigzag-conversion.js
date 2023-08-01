/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1){
        return s
    }
    let arr = Array.from(Array(numRows), () => new Array())
    let ddd=0
    for(let i=0;i<s.length;i++){
        if(i===numRows*ddd+(numRows-2)*ddd){
            for(let j=0;j<numRows;j++){
                if(s[i+j]!==undefined){
                      arr[j].push(s[i+j])
                }
              
            }
            ddd+=1
            i+=numRows-1
        }else{
            let count=0
              for(let j=numRows-2;j>0;j--){
            
                      arr[j].push(s[i+count])
                        count++
              
            }
            
            i+=(numRows-3)
        }
    }
    return arr.flat().join('')
};