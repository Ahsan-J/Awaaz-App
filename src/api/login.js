import { sendAPI } from '../helpers/apiHelper.js'

export function loginAPI(params) {
  return dispatch => {
    console.log(params)
    dispatch(sendAPI(params,onSuccessLogin,onFailureLogin))
  }
}

function onSuccessLogin(response,params){
  return dispatch => {
    console.log("onSuccessLogin",response);
  }
}

function onFailureLogin(response,params){
  return dispatch => {
    console.log("onFailureLogin",response);
  }
}