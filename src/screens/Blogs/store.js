import { EventEmitter } from 'events'
import {dispatcher} from '../../helpers/fluxHelpers.js'
import {} from './actionTypes'

class BlogStore extends EventEmitter {
  constructor() {
    super()
  }
}

const Store = new BlogStore();
// dispatcher.register(Store.handleChanges.bind(Store))
export default Store;