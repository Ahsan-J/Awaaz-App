import { EventEmitter } from 'events'
import {dispatcher} from '../../helpers/fluxHelpers.js'
import {} from './actionTypes'

class DashboardStore extends EventEmitter {
  constructor() {
    super()
  }
}

const Store = new DashboardStore();
// dispatcher.register(Store.handleChanges.bind(Store))
export default Store;