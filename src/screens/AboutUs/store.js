import { EventEmitter } from 'events'
import {dispatcher} from '../../helpers/fluxHelpers.js'
import {} from './actionTypes'

class AboutUsStore extends EventEmitter {
  constructor() {
    super()
  }
}

const Store = new AboutUsStore();
// dispatcher.register(Store.handleChanges.bind(Store))
export default Store;