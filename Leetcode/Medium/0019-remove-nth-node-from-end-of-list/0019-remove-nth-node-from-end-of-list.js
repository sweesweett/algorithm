/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let copy1=head
    let list=null
    let cc=null    
    let count=0
    while(copy1!==null){
        const next=copy1.next
          copy1.next= cc
          cc=copy1
          copy1=next
        count++
    }
    for(let i=0;i<count;i++){
        const next=cc.next
        if(n-1!==i){
        cc.next= list
          list=cc

        }
          cc=next
    }

   return list
};