/**
 * @param {string} tiles
 * @return {number}
 */

var numTilePossibilities = function(tiles) {
    let map = new Map()
    for(let val of tiles){
        if(map.has(val)){
            map.set(val,map.get(val)+1)
        }else{
            map.set(val,1)
        }
    }
    return ddd(map)

    
};
function ddd(map){
let count=0
map.forEach((value,key)=>{
    if(value>0){
        count++
         map.set(key,value-1)
         count+=ddd(map)
         map.set(key,value)
    }
})
return count

}