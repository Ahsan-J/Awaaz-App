import actionTypes from '../actionTypes/general.js'

var generalVarables = {
	counter : 0
};
export default function (state = generalVarables, action) {
	switch (action.type) {
		
		case actionTypes.ADD_COUNT:
			return state = {
				...state,
				counter : action.counter
			}

		default:
			return state;
	}
}