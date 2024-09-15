/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    let count=0
    let arr= Array.from({length:m},()=>new Array(n).fill(-1))
    let coord=[0,1]
    while(head){
        for(let i=coord[0];i<n-coord[0];i++){
            if(!head){
                return arr
            }
            arr[coord[0]][i]=head.val
            head=head.next
 
        }
        for(let i=coord[1];i<m-coord[1];i++){
             if(!head){
                return arr
            }
            arr[i][n-coord[0]-1]=head.val
            head=head.next
        }
        for(let i=n-coord[0]-1;i>=coord[0];i--){
             if(!head){
                return arr
            }
            arr[m-coord[1]][i]=head.val
              head=head.next
        }
         for(let i=m-coord[1]-1;i>=coord[1];i--){
             if(!head){
                return arr
            }
            arr[i][coord[0]]=head.val
            head=head.next
        }
        coord[0]++
        coord[1]++

    }
    return arr
};