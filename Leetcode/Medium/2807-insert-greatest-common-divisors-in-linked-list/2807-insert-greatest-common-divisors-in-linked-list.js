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
    let list= head

    while(list){
       if(list.next){
           let middleNode=new ListNode(gcd(list.val,list.next.val))
           let tmp= list.next
           list.next= middleNode
           list=list.next
           list.next= tmp
       }
       list=list.next

    }
 return head
    
    
    
    
};
function gcd(val1,val2){
        if(val1===val2){
            return val1
        }
        let p,q;
        if(val1<=val2){
            [p,q]=[val1,val2]
        }else{
            [p,q]=[val2,val1]
        }
        while(true){
        if(q%p===0){
            break
        }
        tmp=q%p
        q=p
        p=tmp
    }
    return p
    }