/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let arr=[]
    let set= new Set()
    let ddd =(num,ee)=>{
        if(ee.length===k){
            let join= ee.sort().join(',')
            if(set.has(join)){
                return;
            }
            arr.push(ee)
            set.add(join)

            return;
        }
        for(let i=1;i<=n;i++){
            let set2= new Set(ee)
            if(set2.size<=num&&set2.has(i)){
               return
            }
            ddd(num+1,[...ee,i])
        }
    }
    ddd(0,[])
    return arr
};