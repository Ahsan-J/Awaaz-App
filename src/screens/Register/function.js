import React from 'react'
import _ from 'lodash'
import RegisterStore from './store';

export default {

  /**********************LifeCycle Components in Order **********************************/
  
  componentDidMount : function () {
    
  },

  /***********************Additonal Functions to be used within component ***************/
  onValueChange2 : function(value) {
    this.setState({
      gender: value
    });
  },
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
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