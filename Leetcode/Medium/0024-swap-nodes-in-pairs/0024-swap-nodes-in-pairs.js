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
var swapPairs = function(head) {
    const recursion=(node)=>{
    if(!node||!node.next){
        return node
    }
    if(node.next){
        let tmp= node
        let tmp2= node.next
        let tmp3= node.next.next
        node=tmp2
        node.next=tmp
        node.next.next=recursion(tmp3)

    }
        
    return node

    }
    return recursion(head)
    
};