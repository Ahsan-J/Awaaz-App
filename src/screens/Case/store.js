import { EventEmitter } from 'events'
import {dispatcher} from '../../helpers/fluxHelpers.js'
import {} from './actionTypes'

class MyCasesStore extends EventEmitter {
  constructor() {
    super()
  }
}

const Store = new MyCasesStore();
// dispatcher.register(Store.handleChanges.bind(Store))
export default Store;