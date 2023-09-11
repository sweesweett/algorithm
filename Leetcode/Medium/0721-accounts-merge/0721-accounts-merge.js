/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
   let parent= {}
    let emails = {};
   let getEmailName= {};
   const find=(x)=>{
       if(parent[x]!==x){
            parent[x] = find(parent[x])
       }
        return parent[x];
   }
   const union =(x,y)=>{
        let X = find(x);
	    let Y = find(y);
	    if (X === Y) return;
	    parent[Y] = X; 

   }

       for (const [name, ...emails] of accounts) {
        for (const email of emails) {
            if (!parent[email]) {
                parent[email] = email;
            }

           getEmailName[email] = name;
            union(email, emails[0]);
        }
    }

    for (const email in parent) {
        const parent = find(email);
        if (parent in emails) {
            emails[parent].push(email);
        } else {
            emails[parent] = [email];
            
        }
    }

return Object.keys(emails).map((el)=>[getEmailName[el],...emails[find(el)].sort()])
};