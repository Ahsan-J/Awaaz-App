import React from 'react'
import _ from 'lodash'
import { PLATFORM, API_KEY } from '../../constant/config.js'
import RegisterStore from './store';
import { loginAPI } from '../../api/login.js';
import { getFormData } from '../../helpers/helper.js'

export default {

  /**********************LifeCycle Components in Order **********************************/

  componentDidMount: function () {

  },

  /***********************Additonal Functions to be used within component ***************/

  login: function (social) {
    email = this.email._root._getText();
    password = this.password._root._getText();

    let params = {
      path: "/login",
      method: "POST",
      data: {
        email,
        password,
        platform: PLATFORM,
        deviceId: this.props.deviceId,
        macAddress: this.props.macAddress,
        apiKey: API_KEY,
        socialPlatform: social ? social : "",
        version: this.props.version,
      }
    }

    params.data = getFormData(params.data);
    this.props.loginCall(params);
  },

  /**********************Connecting and defining the Redux ******************************/
  mapStateToProps: function (state) {
    return {
      version: state.general.version,
      deviceId: state.general.deviceId,
      macAddress: state.general.macAddress,
    }
  },

  mapDispatchToProps: function (dispatch) {
    return {
      loginCall: params => dispatch(loginAPI(params)),
    }
  },
}

// Local functions limitng to only this component