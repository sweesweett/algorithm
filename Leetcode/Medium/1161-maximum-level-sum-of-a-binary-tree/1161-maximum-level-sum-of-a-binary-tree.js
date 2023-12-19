var maxLevelSum = function(root) {
    let arr=[]
    const bfs=(root)=>{
      let stack=[[root,0]]
      while(stack.length){
          let [node,depth]=stack.pop()
          if(!node){
              continue
          }
          if(arr[depth]===undefined){
              arr[depth]=node.val
          }else{
              arr[depth]+=node.val
          }
          stack.push([node.left,depth+1],[node.right,depth+1])  

      }

  }
  bfs(root)
  let max=[-Infinity,0]
  arr.forEach((el,i)=>{
      if(el>max[0]){
          max[0]=el
          max[1]=i
      }

  })
    return max[1]+1
};

