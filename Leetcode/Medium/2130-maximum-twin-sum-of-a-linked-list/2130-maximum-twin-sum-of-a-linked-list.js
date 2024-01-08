/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
     let fast=head
    let slow=head
    let arr=[]
    let max= -Infinity
    if(!fast){
        return fast
    }
    while(fast.next&&fast.next.next&&fast.next.next.next){
        arr.push(slow.val)
        fast=fast.next.next
        slow=slow.next

    }
    arr.push(slow.val)
    slow=slow.next
    while(slow){
        max=Math.max(arr.pop()+slow.val,max)
        slow=slow.next


    }
    return max
};