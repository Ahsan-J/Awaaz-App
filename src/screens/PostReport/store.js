import { EventEmitter } from 'events'
import {dispatcher} from '../../helpers/fluxHelpers.js'
import {} from './actionTypes'

class ReportStore extends EventEmitter {
  constructor() {
    super()
  }
}

const Store = new ReportStore();
// dispatcher.register(Store.handleChanges.bind(Store))
export default Store;