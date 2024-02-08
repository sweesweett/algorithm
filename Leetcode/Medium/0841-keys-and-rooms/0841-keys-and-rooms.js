/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    
    const dfs=(set,room)=>{
        
        if(set.size===rooms.length){
            return true
        }
        for(let i=0;i<rooms[room].length;i++){
            let val=rooms[room][i]
            if(set.has(val)){
                continue
            }else{
                set.add(val)
                if(dfs(set,val)){
                    return true
                }
               
            }
        }
        return false
    }
    return dfs(new Set([0]),0)
};