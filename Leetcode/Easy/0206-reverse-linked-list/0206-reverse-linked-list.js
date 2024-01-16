var reverseList = function(head) {
   return recursion(head,null)
};
function recursion(node,newNode){
    if(!node){
        return newNode
    }
    let v= new ListNode(node.val)
    v.next= newNode
    newNode=v
    return recursion(node.next,newNode)
}