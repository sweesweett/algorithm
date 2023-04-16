/**
 * @param {number[]} arr
 * @return {number[]}
 */
 //map써보
var sortByBits = function(arr) {
    let newArr=arr.map(el=>countsBits(el))
    let map =new Map()
    arr.forEach((el,idx)=>{
        map.set(el,newArr[idx])
    })
    arr.sort((a,b)=>{
        let valA= map.get(a)
        let valB= map.get(b)
        if(valA===valB){
            return a-b
        }else{
            return valA-valB

        }
    

    })
   return arr
};
function countsBits(num){
    let str= num.toString(2)
    let count=0
   for(let val of str){
       if(val==='1'){
           count++
       }
   }
    return count

}