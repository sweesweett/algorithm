/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(matrix, k) {
    const pr = new MaxPriorityQueue();
    
    for(let i = 0; i < matrix.length; i++)
        for(let j = 0; j < matrix.length; j++){
            pr.enqueue(matrix[i][j]);
            if(pr.size() > k) pr.dequeue();
        }

    return pr.front().element;
};