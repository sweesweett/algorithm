var MagicDictionary = function() {
    this.dic= []
    this.map= new Map()
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    this.dic=[...dictionary]

};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    if(this.map.has(searchWord)){
        return this.map.get(searchWord)
    }
    return this.dic.some(val=>{
         if(searchWord===val||searchWord.length!==val.length){
                this.map.set(searchWord,false)
                return false
            }  
        for(let i=0;i<val.length;i++){
           
            let newVal= val.slice(0,i)+val.slice(i+1)
            let newSW= searchWord.slice(0,i)+searchWord.slice(i+1)
            if(newVal===newSW){
                this.map.set(searchWord,true)
                return true
            }
        }
        return false   
    })   

};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */