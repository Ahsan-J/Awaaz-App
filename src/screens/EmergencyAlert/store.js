import { EventEmitter } from 'events'
import {dispatcher} from '../../helpers/fluxHelpers.js'
import {} from './actionTypes'

class EmergencyAlertStore extends EventEmitter {
  constructor() {
    super()
  }
}

const Store = new EmergencyAlertStore();
// dispatcher.register(Store.handleChanges.bind(Store))
export default Store;