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
var middleNode = function(head) {
    let count=0
    let list=head
    let li = list
    while(list!==null){
        list=list.next
        count++
    }
    let half=Math.round(count/2)
    while(count>half){
       head=head.next
        count--
    }
    return head
};
