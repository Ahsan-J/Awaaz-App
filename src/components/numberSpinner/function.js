import React from 'react'
import _ from 'lodash'

export default {

  /**********************LifeCycle Components in Order **********************************/
  componentWillMount :function () {
    if(!_.isUndefined(this.props.value) && this.props.value != this.state.counter){
      this.setState({
        counter : this.props.value
      })
    }
  },
  /***********************Additonal Functions to be used within component ***************/

  onChange: function (type) {
    switch (type) {
      case "MINUS":
        this.state.counter = this.state.counter - this.state.step;
        break;
      case "PLUS":
        this.state.counter = this.state.counter + this.state.step;
        break;
    }
    this.setState({
      counter : this.state.counter
    });
    this.props.onChange(this.state.counter);
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