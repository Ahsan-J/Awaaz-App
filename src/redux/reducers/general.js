var generalVarables = {
	macAddress: null,
	deviceId : null,
	version: null,
	activeRoute : 'Dashboard',
	loader: false,
};

export default function (state = generalVarables, action) {
	switch (action.type) {
		
		case "SET_ACTIVE_ROUTE":
			return state = {
				...state,
				activeRoute : action.activeRoute,
			}
		case "SET_LOADER":
			return state = {
				...state,
				loader: action.loader,
			}
		case "SET_MAC_ADDRESS": 
			return state = {
				...state,
				macAddress : action.macAddress
			}
		case "SET_DEVICE_ID": 
			return state = {
				...state,
				deviceId: action.deviceId,
			}
		case "SET_VERSION": 
			return state = {
				...state,
				version: action.version,
			}
		
		default:
			return state;
	}
}