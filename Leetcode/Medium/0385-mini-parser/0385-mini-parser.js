/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
     let dfs=(str,length=0)=>{
        let stack=[]
         let isOpen=false
         let num=''
        for(let i=0;i<str.length;i++){
           if(str[i]==='['&&!isOpen){
            isOpen=true
            
            }else if(str[i]===','){
            if(num!==''){
                stack.push(Number(num))
                num=''
            }
            }else if(str[i]==='['&&isOpen){
                let [val,idx]=dfs(str.slice(i),i)
                stack.push(val)
                i+=idx
                
            }else if(str[i]===']'&&isOpen){
                if(num!==''){
                    stack.push(Number(num))
                }
                return [stack,i]
               
            }else{
                num+=str[i]
            }
            
        }
        return [stack,length]

    }
    let stack=[...dfs(s)[0]]

    if(Number.isInteger(Number(s))){
        return new NestedInteger(s)
    }
    else if(stack.length===0){
        return new NestedInteger()
    }

    let dfs2=(arr)=>{
        let nested= new NestedInteger()
        for(let val of arr){
            if(Array.isArray(val)){
         
            nested.add(dfs2(val))

        }else{
           nested.add(new NestedInteger(val))
        }
        }
       
        return nested
    } 
     return dfs2(stack)
};