/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    let transQueries=[]
    let transWords=[]
    let ans=[]
    for(let val of queries){
        let map =trans(val)  
        let keys= [...map.keys()].sort()
        transQueries.push(map.get(keys[0]))
    }
    for(let val of words){
         let map =trans(val)  
         let keys= [...map.keys()].sort()
         transWords.push(map.get(keys[0]))
    }
    transWords.sort((a,b)=>a-b)
    for(let val of transQueries){
        let l=0
        let r=transWords.length-1
        while(l<=r){
            let m=Math.floor((l+r)/2)
            if(transWords[m]<=val){
                l=m+1
            }else{
                r=m-1
            }
        }
       ans.push(transWords.length-l)

    }




   return ans
};
 function trans(val){
         let map=new Map()
         for(let v of val){
            if(map.has(v)){
                map.set(v,map.get(v)+1)
            }else{
                map.set(v,1)
            }
        }

        return map
    }