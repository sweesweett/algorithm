/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length===1&&s!==goal){
        return true
    }
    if(s.length!==goal.length){
        return false
    }

    let set= new Set()
    for(let i=0;i<s.length;i++){
        if(s[i]!==goal[i]){
           set.add(i)
        }
        if(set.size>2){
            return false
        }
    }
    if(set.size===1){
        return false
    }
    if(!set.size){
        return  new Set(s).size!==goal.length
    }
    let [a,b]=[...set]
    if(s[a]===goal[b]&&s[b]===goal[a]){
        return true
    }
    return false
}