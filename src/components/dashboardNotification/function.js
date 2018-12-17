import React from 'react'
import _ from 'lodash'
import theme from '../../constant/theme';

export default {

  /**********************LifeCycle Components in Order **********************************/

  /***********************Additonal Functions to be used within component ***************/

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

export function applyBackgroundColor(props) {
  if (props['info']) {
    return {
      backgroundColor: theme.infoColor,
    }
  }
  if (props['primary']) {
    return {
      backgroundColor: theme.primaryColor,
    }
  }
  if (props['secondary']) {
    return {
      backgroundColor: theme.secondaryColor,
    }
  }
  if (props['success']) {
    return {
      backgroundColor: theme.successColor,
    }
  }
  return {
    backgroundColor: theme.warnColor,
  }
}