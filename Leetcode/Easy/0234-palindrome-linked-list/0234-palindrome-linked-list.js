/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr=[]
    while(head){
        arr.push(head.val)
        head=head.next
    }
    let length=arr.length
    for(let i=0;i<=Math.floor(length/2);i++){
        if(arr[i]!==arr[length-1-i]){
            return false
        }
    }
    return true
};