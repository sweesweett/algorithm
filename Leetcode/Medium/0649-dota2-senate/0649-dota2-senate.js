/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
   let d=[]
   let r=[]
   let length=senate.length
   for(let i=0;i<senate.length;i++){
      if(senate[i]==='D')d.push(i)
      else r.push(i)

   }
   while(r.length&&d.length){
      let dd=d.shift()
      let rr=r.shift()
      if(dd>rr)r.push(length++)
      else d.push(length++)
   }
   
   return r.length?'Radiant':'Dire'
};