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
var removeNodes = function(head) {
    let stack=[]
    while(head){
        if(!stack.length){
            stack.push(head.val)
            head=head.next
            continue
        }
        while(stack.length&&stack.at(-1)<head.val){
            stack.pop()   
        }
        stack.push(head.val)
        head=head.next
    }
    while(stack.length){
        head=new ListNode(stack.pop(),head)
    }

    return head

};