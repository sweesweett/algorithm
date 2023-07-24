/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    //65,90
    let answer=''
    let num= columnNumber
    while(num>=1){
        
        let rest=(num)%26
        if(rest===0){         
            answer='Z'+answer
            num-=1
        }else{
            answer=(String.fromCharCode(64+rest))+answer
        }
        num=Math.trunc(num/26)
    }
    return answer
};