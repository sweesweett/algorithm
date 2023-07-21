class EventEmitter {
  constructor(){
    this.map= new Map()
  }
  subscribe(event, cb) {
    if(this.map.has(event)){
      this.map.set(event, [...this.map.get(event),cb])

    }else{
       this.map.set(event,[cb])
    }
      
    return {
        unsubscribe: () => {
          const val= this.map.get(event)
          
          if(val.length>1){
            this.map.set(event, val.slice(1))

          }else{
            this.map.delete(event)
          }
          
          return;
        }
    };
  }

  emit(event, args = []) {
    const func= this.map.get(event)
    if(!func){
      return []
    }
    return func.map((f)=>f(...args))
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */