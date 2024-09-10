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
var insertGreatestCommonDivisors = function(head) {
    let node=head
    let prev;
    while(node.next){
        let val =node.next.val
        let next= new ListNode(gcd([node.val,val]))
        let tmp=node.next
        node.next=next
        next.next=tmp
        node=tmp
    }
   return head
};
function gcd(val){
    let [p,q]=val
    if(p===q){
        return p
    }
    if(p>q){
        [p,q]=[q,p]
    }
    while(q>1){
        let tmp=q%p
        if(tmp===0){
            break
        }
        q=p
        p=tmp
    }

    return p
}