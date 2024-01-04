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
var oddEvenList = function(head) {

    let newNode= new ListNode()
    let evenNode= new ListNode()
    let node= newNode
    let node2=evenNode
    let i=1
    while(head){
        if(i%2===0){
            node2.next=head
            node2=node2.next
        }else{
            node.next=head
            node=node.next
        }
        head=head.next
        if(!head){
            node2.next=null
            node2=node2.next
            
        }
        i++
    }
    evenNode=evenNode.next
    node.next=evenNode
    node=node.next
    return newNode.next
};