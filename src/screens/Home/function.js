import React from 'react'
import _ from 'lodash'
import counterStore from './store';
import { addCount } from '../../redux/actions/general'

export default {

  /**********************LifeCycle Components in Order **********************************/
  
  componentDidMount : function () {
    counterStore.on("change",()=>{
      this.setState({
        counter: counterStore.getCounter()
      })
    })
  },

  /***********************Additonal Functions to be used within component ***************/

  /**********************Connecting and defining the Redux ******************************/
  mapStateToProps: function (state) {
    return {
      counter : state.general.counter
    }
  },

  mapDispatchToProps: function (dispatch) {
    return {
      addCount : (count)=> dispatch(addCount(count))
    }
  },
}

// Local functions limitng to only this component