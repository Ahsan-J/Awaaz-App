import React from 'react'
import _ from 'lodash'
import DeviceInfo from 'react-native-device-info';
import { setLoader, setMACAddress, setDeviceID, setVersion } from '../../redux/actions/general.js'
import { replaceNavigate } from '../../helpers/navigationHelper.js'

export default {

  /**********************LifeCycle Components in Order **********************************/
  componentWillMount : function () {
    DeviceInfo.getMACAddress().then((mac)=>{
      this.props.setMACAddress(mac)
    });
    this.props.setDeviceID(DeviceInfo.getUniqueID())
    this.props.setVersion(DeviceInfo.getVersion())
    this.props.setLoader(true)
  },

  componentDidMount : function () {
    this.props.navigation.replace("Login");
    this.props.setLoader(false)
  },

  /***********************Additonal Functions to be used within component ***************/

  /**********************Connecting and defining the Redux ******************************/
  mapStateToProps: function (state) {
    return {
      
    }
  },

  mapDispatchToProps: function (dispatch) {
    return {
      setLoader: (loader)=> dispatch(setLoader(loader)),
      setMACAddress: (macAddress)=> dispatch(setMACAddress(macAddress)),
      setDeviceID: (deviceId) => dispatch(setDeviceID(deviceId)),  
      setVersion: (version) => dispatch(setVersion(version)),   
    }
  },
}

// Local functions limitng to only this component