/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let list=new ListNode(-1)
    let dd=list
    while(head!==null){
        if(head.val!==val){
            dd.next=head
            head=head.next
            dd=dd.next
           

        }else{
           
            head=head.next
             if(head===null){
                dd.next=head
            }
            
        }

    }
    return list.next
};