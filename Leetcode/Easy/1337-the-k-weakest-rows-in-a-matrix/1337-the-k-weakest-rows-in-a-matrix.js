/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let pr = new MinPriorityQueue()
    let num;
    for(let i=0;i<mat.length;i++){
        let sum=mat[i].reduce((a,b)=>a+b)
  
              pr.enqueue(i,sum)
      
    }
    let arr= pr.toArray()
    arr.sort((a,b)=>{
        if(a.priority===b.priority){
            if(a.element>b.element){
                return 1
            }else{
                return -1
            }

        }else{
            return a.priority-b.priority
        }

    })
    return arr.map(el=>el.element).slice(0,k)
};