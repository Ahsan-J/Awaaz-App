import {
  Platform
} from 'react-native'

export const BASE_URL = "https://awaaz-server.herokuapp.com/"
export const ACCESS_TOKEN_KEY = "Awaaz_access_token_key";
export const REFRESH_TOKEN_KEY = "Awaaz_refresh_token_key";
export const DEVICE_ID = "Awaaz_device_id_key";
export const USER_ID = "Awaaz_user_id_key";
export const API_KEY = (Platform.OS == 'android') ? "5BF0953C603597B9EED9FD70C019341C87F971ABAD2CDB657E6BE6133FF6F0F2" : "959424F46F2547B2A325572867865D555B23BBB8CBDA96C50200C004FA17DAC5";
export const PLATFORM = Platform.OS;