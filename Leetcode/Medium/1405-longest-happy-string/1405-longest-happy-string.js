/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    const map = new Map()
    let ans=''
    const pr = new MaxPriorityQueue()
    pr.enqueue('a',a)
    pr.enqueue('b',b)
    pr.enqueue('c',c)
    while(pr.size()>0){
        if(!pr.front().priority){
            pr.dequeue()
        }
        if(pr.size()===0){
            return ans
        }
        let dq1= pr.dequeue()
        if(dq1.element===ans.at(-1)){
            let dq2= pr.dequeue()
            if(!dq2){
                return ans
            }
             let count=0
            let ddd= dq2.priority
            while(count<1&&ddd>0){
                ans+=dq2.element
                count++
                ddd--
            }
            if(ddd>0){
            pr.enqueue(dq2.element,ddd)
        }

        }
        if(dq1.element===ans.at(-1)){
            return ans
        }
        let count=0
        let ddd= dq1.priority
        while(count<2&&ddd>0){
            ans+=dq1.element
            count++
            ddd--
        }
        if(ddd>0){
            pr.enqueue(dq1.element,ddd)
        }

      

       
    }
    return ans
};