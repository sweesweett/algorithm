/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let ans=[]
    let set = new Set()
    candidates.sort((a,b)=>a-b)
    const ddd=(idx,sum,arr)=>{
       
   
        if(sum>target){
            return;
        }
        if(sum===target){
            ans.push([...arr])
            return;
        }
        for(let i=idx ;i<candidates.length;i++){
            if(candidates[i]===candidates[i-1]&&idx!==i){
                continue
            }
            if((sum+candidates[i])>target||candidates[i]>target){
               return;

            }
            arr.push(candidates[i])
            ddd(i+1,sum+candidates[i],arr)
            arr.pop()
        }
    }
    ddd(0,0,[])
    return ans
};