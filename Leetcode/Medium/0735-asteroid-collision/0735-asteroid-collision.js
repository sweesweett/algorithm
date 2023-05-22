/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack=[]
    let idx=0
    while(idx<asteroids.length){
        let tail= stack[stack.length-1]
        if((tail>=0&&asteroids[idx]<0)){
            if(Math.abs(stack[stack.length-1])<Math.abs(asteroids[idx])){
                 stack.pop()         
            }else if (Math.abs(stack[stack.length-1])===Math.abs(asteroids[idx])){
                stack.pop()
                idx++
            }else{
                idx++
            }
           
        }else{
            stack.push(asteroids[idx])
            idx++
        }
    }
    return stack
};