var token = {
	accessToken: null,
	accessTokenExpiry: null,
	accessTokenTime: null,
	refreshToken: null,
	refreshTokenTime: null,
	refreshTokenExpiry: null,
}

export default function (state = token, action) {
	switch (action.type) {

		case "SET_ACCESS_TOKEN":
			return state = {
				...state,
				accessToken: action.accessToken,
				accessTokenExpiry: action.accessTokenExpiry,
				accessTokenTime: action.accessTokenTime,
			}
		case "SET_REFRESH_TOKEN":
			return state = {
				...state,
				refreshToken: action.refreshToken,
				refreshTokenExpiry: action.refreshTokenExpiry,
				refreshTokenTime: action.refreshTokenTime,
			}

		default:
			return state;
	}
}