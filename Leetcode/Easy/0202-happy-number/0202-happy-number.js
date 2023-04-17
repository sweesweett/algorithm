/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let map=new Map();
    let num=n
    while(true){
        let arr=[...String(num)].map(Number)
        let sum=0
        for(let val of arr){
            sum+= val**2
        }
        if(map.has(sum)){
            return false
        }
        if(sum===1){
            return true
        }
        map.set(sum,1)
        num=sum
    }

};