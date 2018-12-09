import { EventEmitter } from 'events'
import {dispatcher} from '../../helpers/fluxHelpers.js'
import {} from './actionTypes'

class AuthoritiesInfoStore extends EventEmitter {
  constructor() {
    super()
  }
}

const Store = new AuthoritiesInfoStore();
// dispatcher.register(Store.handleChanges.bind(Store))
export default Store;