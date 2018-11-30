import actions from '../actionTypes/general.js'

export function addCount(counter){
    return {
        type:actions.ADD_COUNT,
        counter,
    }
}