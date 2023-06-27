var nthUglyNumber = function(n) {
    let i=1
    let pr= new MinPriorityQueue()
    let set= new Set()
    set.add(1)
    while(n>1){

            if(!set.has(i*2)){
                 set.add(i*2)
                pr.enqueue(i*2)
            }
            if(!set.has(i*3)){
                set.add(i*3)
                pr.enqueue(i*3)
            }
            if(!set.has(i*5)){
                  set.add(i*5)
                   pr.enqueue(i*5)
                
            }
        i=pr.dequeue().priority
        n--
    }

   return i
};