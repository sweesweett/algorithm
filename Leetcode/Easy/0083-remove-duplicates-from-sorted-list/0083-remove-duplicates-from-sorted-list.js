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
var deleteDuplicates = function(head) {
    let arr=[]
    let list=new ListNode(-1)
    let dd= list
    while(head!==null){
        if(arr[arr.length-1]===head.val){
            head=head.next
        }else{
            arr.push(head.val)
            dd.next=head
            head=head.next
            dd=dd.next
         
        }

    }
    dd.next=null
    return list.next
};