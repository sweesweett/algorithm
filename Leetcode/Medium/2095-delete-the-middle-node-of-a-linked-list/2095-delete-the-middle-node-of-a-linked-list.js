/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    
    let fast=head
    let slow=head

    if(!fast){
        return fast
    }
    while(fast.next&&fast.next.next&&fast.next.next.next){
        fast=fast.next.next
        slow=slow.next

    }
    if(slow.next){
        slow.next=slow.next.next
    }else{
        return slow.next
    }
    return head

}   

