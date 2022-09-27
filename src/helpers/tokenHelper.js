import React from 'react';
import { AsyncStorage } from 'react-native';
import { ACCESS_TOKEN_KEY, USER_ID } from '../constant/config.js'
import _ from 'lodash'
import moment from 'moment';

export function getUserID() {
  return dispatch => {
    AsyncStorage.getItem(USER_ID).then((userId)=> {
      if(!_.isNull(userId)) {
        dispatch(setUserId(userId))
      }
    })
  }
}

export function getAccessToken() {
  return dispatch => {
    AsyncStorage.getItem(ACCESS_TOKEN_KEY).then((item)=> {
      if(!_.isNull(item)){
        let temp = JSON.parse(item);
      }
    })
  }
}

export function setAccessToken({accessToken,accessTokenTime,accessTokenExpiry}) {
  return dispatch=> {
    if(!_.isUndefined(accessToken) && !_.isNull(accessToken) && !_.isUndefined(accessTokenTime) && !_.isNull(accessTokenTime) && !_.isUndefined(accessTokenExpiry) && !_.isNull(accessTokenExpiry)){
      let temp = JSON.stringify({
        accessToken,
        accessTokenTime,
        accessTokenExpiry
      });
      AsyncStorage.setItem(ACCESS_TOKEN_KEY,temp);
    }
  }
}

export function setRefreshToken({refreshToken,refreshTokenTime,refreshTokenExpiry}) {
  return dispatch => {

  }
}

export function validateToken({token,tokenTime,tokenExpiry}) {
  let time = moment(tokenTime);
  console.log(time);
}