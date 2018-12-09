import {SET_ACTIVE_ROUTE} from '../actionTypes/general.js'

var generalVarables = {
	activeRoute : 'Dashboard'
};
export default function (state = generalVarables, action) {
	switch (action.type) {
		
		case SET_ACTIVE_ROUTE:
			return state = {
				...state,
				activeRoute : action.activeRoute
			}

		default:
			return state;
	}
}