/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let map=new Map();
    let num=n
    while(true){
        let sum=0
        while(num>1){
            let rest= num%10
            sum=sum+rest**2
            num=(num-rest)/10
        }
        sum+=(num%10)**2
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