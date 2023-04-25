/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    const max=Math.max(a.length,b.length)
    let arr=Array(max).fill(0)
    let newA='0'.repeat(max-a.length)+a
    let newB='0'.repeat(max-b.length)+b
    for(let i=max-1;i>=0;i--){
        if(i===0){
            if(arr[i]+Number(newA[i])+Number(newB[i])>=2){
                arr[i]=arr[i]+Number(newA[i])+Number(newB[i])-2
                arr.splice(0,0,1)
                
            }else{
                arr[i]+=Number(newA[i])+Number(newB[i])
            }

        }else{
        if(Number(newA[i])+Number(newB[i])+arr[i]>=2){
            arr[i-1]+=1
            arr[i]=Number(newA[i])+Number(newB[i])+arr[i]-2

        }else{
            arr[i]+=Number(newA[i])+Number(newB[i])
        }
        }

    }
   return arr.join('')
};