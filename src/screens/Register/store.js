import { EventEmitter } from 'events'
import {dispatcher} from '../../helpers/fluxHelpers.js'
import {} from './actionTypes'

class RegisterStore extends EventEmitter {
  constructor() {
    super()
  }
}

const Store = new RegisterStore();
// dispatcher.register(Store.handleChanges.bind(Store))
export default Store;