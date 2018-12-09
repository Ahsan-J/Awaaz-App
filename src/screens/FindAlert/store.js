import { EventEmitter } from 'events'
import {dispatcher} from '../../helpers/fluxHelpers.js'
import {} from './actionTypes'

class FindAlertStore extends EventEmitter {
  constructor() {
    super()
  }
}

const Store = new FindAlertStore();
// dispatcher.register(Store.handleChanges.bind(Store))
export default Store;