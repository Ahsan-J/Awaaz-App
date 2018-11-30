import {actionTypes} from './store'
import {dispatcher} from '../../helpers/fluxHelpers'

export function addCount (count) {
  dispatcher.dispatch({
    type : actionTypes.ADD_COUNT,
    count
  })
}