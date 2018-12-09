import { EventEmitter } from 'events'
import {dispatcher} from '../../helpers/fluxHelpers.js'
import {} from './actionTypes'

class RecordNowStore extends EventEmitter {
  constructor() {
    super()
  }
}

const Store = new RecordNowStore();
// dispatcher.register(Store.handleChanges.bind(Store))
export default Store;