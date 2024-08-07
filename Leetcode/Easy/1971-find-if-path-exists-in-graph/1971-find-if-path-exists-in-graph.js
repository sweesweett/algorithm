/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if(source===destination)return true
    let arr= Array.from({length:n},()=>new Set())
    for(let [to,from] of edges){
        arr[to].add(from)
        arr[from].add(to)
    }
    return findPath([source,destination],new Set())

    function findPath([start,end],visited){
    if(visited.size>=n){
        return false
    }
    let isFound=false    
    if(arr[start].has(end)){
        return true
    }
    for(let path of arr[start]){
        if(!visited.has(path)){
           visited.add(path)
            if(!isFound){
            isFound=findPath([path,end],visited)
            }            
        }
    }
    return isFound
}
};
