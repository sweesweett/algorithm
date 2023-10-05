
var MyCalendar = function() {
    this.set= new Set()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(let val of this.set){
        let [l,r]= val
        if(start<l&&end<=l){
            continue
        }
        if(r<=start){
            continue
        }
        if(l===start){
            return false
        }
        if(start>l){
            if(!binarySearch(l,r,start)){
                return false
            }
        }
        else if(end>r){
            return false
        }
        else{
           if(!binarySearch(l,r,end)){
                return false
            }
        }
   
         
    }
    this.set.add([start,end])
    return true
};


function binarySearch(l,r,compare){
    while(l<r){
            let mid= Math.floor((l+r)/2)
            if(mid===compare){
                return false
            }
            if(mid<compare){
                l=mid+1
            }else{
                r=mid-1
            }
        }
            if(l===compare){
            return false
        }

    return true


}




/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */