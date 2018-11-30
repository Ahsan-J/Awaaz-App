import { EventEmitter } from 'events'
import {dispatcher} from '../../helpers/fluxHelpers.js'

const actionTypes = {
  ADD_COUNT : "ADD_COUNT"
}

class Counter extends EventEmitter {
  constructor() {
    super()
    this.counter=0
  }
  
  setCounter = (count) => {
    this.counter = count;
    this.emit("change")
  }
  
  getCounter = () => {
    return this.counter
  }
  
  handleChanges = (actions) => {
    switch (actions.type){
      case actionTypes.ADD_COUNT:
      return this.setCounter(actions.count)
    }
    
  }
}

const counterStore = new Counter();
dispatcher.register(counterStore.handleChanges.bind(counterStore))
export default counterStore;
export {actionTypes};