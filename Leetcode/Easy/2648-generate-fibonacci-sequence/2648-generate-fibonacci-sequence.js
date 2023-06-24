/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let curr=1
    let prev=1
    yield 0
    yield 1
    yield 1
    for(let i=3;i<=50;i++){
        if(i===50){
            return curr+prev
        }
        yield (curr+prev)
        let tmp=prev
        prev=curr
        curr=curr+tmp

    }
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */