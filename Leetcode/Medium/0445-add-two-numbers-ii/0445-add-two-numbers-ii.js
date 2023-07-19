/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arr1=[]
    let arr2=[]
    while(l1||l2){
        if(l1){
            arr1.push(l1.val)
            l1=l1.next
        }
        if(l2){
             arr2.push(l2.val)
            l2=l2.next
        }
        
    }
    let l3 = new ListNode()
    
    while(arr1.length||arr2.length){
        let sum=0
       
        if(arr1.length){
           sum+=arr1.pop()
        }
        if(arr2.length){
            sum+=arr2.pop()
        }
        sum+=l3.val
        l3.val=sum%10
        sum-=l3.val
        const node = new ListNode(Math.floor(sum/10))
        node.next= l3
        l3= node
    }
    return l3.val===0?l3.next:l3
};