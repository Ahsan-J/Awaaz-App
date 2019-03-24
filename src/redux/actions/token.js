export function setAccessToken({accessToken,accessTokenTime,accessTokenExpiry}) {
  return {
    type : "SET_ACCESS_TOKEN",
    accessToken,
    accessTokenTime,
    accessTokenExpiry,
  }
}

export function setRefreshToken({refreshToken,refreshTokenTime,refreshTokenExpiry}) {
  return {
    type : "SET_REFRESH_TOKEN",
    refreshToken,
    refreshTokenTime,
    refreshTokenExpiry,
  }
}