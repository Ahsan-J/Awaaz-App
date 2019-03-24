import axios from 'axios';
import { BASE_URL } from '../constant/config.js';
import _ from 'lodash';

export function sendAPI(params, onSuccess, onFailure) {
  return dispatch => {
    if (_.isUndefined(params.path) || _.isNull(params.path)) {
      console.log("Path unspecified", params)
      return
    }

    axios({
      url: BASE_URL + params.path,
      method: params.method ? params.method : "POST",
      params: params.params ? params.params : {},
      data: params.data ? params.data : {},
      headers: getHeader(params.headers),
    }).then((response) => {
      dispatch(onSuccess(response.data, params));
    }).catch((error) => {
      dispatch(onFailure(error.response.data, params));
    })
  }
}

function getHeader(params) {
  if (!_.isUndefined(params) && !_.isUndefined(params.accessToken) && !_.isNull(params.accessToken)) {
    return {
      Authorization : "Bearer "+params.accessToken
    }
  }
  if (!_.isUndefined(params) && !_.isUndefined(params.refreshToken) && !_.isNull(params.refreshToken)) {
    return {
      Authorization : "Bearer "+params.refreshToken
    }
  }
  return {};
}