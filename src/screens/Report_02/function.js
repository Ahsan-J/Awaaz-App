import React from 'react'
import _ from 'lodash'
import ReportStore from './store';
import { navigate } from '../../helpers/navigationHelper';

export default {

  /**********************LifeCycle Components in Order **********************************/
  
  componentDidMount : function () {
    
  },
  onNext:function (){
    navigate("Report_03")
  },
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