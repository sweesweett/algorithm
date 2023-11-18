/**
 * @param {number} n
 * @return {number[]}
 */
//dp 다시 이해하고 풀어보는중!
var countBits = function(n) {
    if(n===0){
        return [0]
    }
    if(n===1){
        return [0,1]
    }

    let arr=[0,1,1]
    for(let i=3;i<=n;i++){
        let num=i
        let val=0
        while(num>=1){
            if(arr[num]){
                val+=arr[num]
                break
            }
            let div=Math.floor(num/2)
            let rest=num%2
            val+=arr[rest]
            num=div
        }
        arr.push(val)
    }
    return arr
};