import React from 'react'
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import _ from 'lodash'
import styles from './style.js'
import DashboardStore from './store';
import Icon from 'react-native-vector-icons/FontAwesome';
import dashboardConstant from './constant.json'
import { getDeviceWidth } from '../../helpers/sizeHelpers.js';
import { navigate } from '../../helpers/navigationHelper.js';

export default {

  /**********************LifeCycle Components in Order **********************************/

  componentDidMount: function () {

  },

  /***********************Additonal Functions to be used within component ***************/
  renderQuickButtons: function () {
    const { Buttons } = dashboardConstant;
    return (
      <View style={styles.buttonsWrapper}>
        {_.map(Buttons, function (button, index) {
          return (
            <TouchableOpacity style={[styles.touchableWrapper, applyDim(Buttons.length)]} key={JSON.stringify(button)} onPress={() => navigate(button.screen)}>
              <Icon name={button.iconName} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>{button.title}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  },
  /**********************Connecting and defining the Redux ******************************/
  mapStateToProps: function (state) {
    return {

    }
  },

  mapDispatchToProps: function (dispatch) {
    return {

    }
  },
}

// Local functions limitng to only this component

function applyDim(length) {
  return {
    height: (getDeviceWidth() * (10 / length) * 0.1) - styles.touchableWrapper.margin,
    width: (getDeviceWidth() * (10 / length) * 0.1) - styles.touchableWrapper.margin,
  }
}