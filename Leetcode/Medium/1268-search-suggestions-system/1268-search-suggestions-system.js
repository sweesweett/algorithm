/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
   products.sort()
   let arr= Array.from({length:searchWord.length},()=>[])
   for(let product of products){
        let i=0,j=0
        while(i<product.length){
            if(j>=searchWord.length){
                break
            }
            if(product[i]===searchWord[j]){
                arr[j].push(product)
                i++
                j++
                
            }else{
                break
            }
        
        }
        
   }
   return arr.map(el=>el.slice(0,3))
};