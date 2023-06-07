/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    let queue=[]
    deck.sort((a,b)=>b-a)
    let length=deck.length
    while(queue.length<length){
            if(queue.length>1){
                queue.unshift(queue.pop())
            }
            queue.unshift(deck.shift())      
           
    }
    return queue
};