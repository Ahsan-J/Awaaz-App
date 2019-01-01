import React from 'react'
import {
  View,
} from 'react-native'
import { Text } from 'native-base'
import _ from 'lodash'
import styles from './style'

const states = ['1','2','3','4','5','6']

export default {

  /**********************LifeCycle Components in Order **********************************/

  /***********************Additonal Functions to be used within component ***************/

  renderCircleState : function (index) {
    return _.map(states,(stateText, stateIndex )=> {
      return (
        <Circle key={stateText + stateIndex } filled={ stateIndex < index } text={stateText}/>
      )
    })
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

// Stateless Component

export const Circle = (props) => {
  return(
    <View style={[styles.circle,(props.filled) ? styles.circleFilled : {}]}>
      <Text style={[styles.circleText,(props.filled) ? styles.circleFilledText : {}]}>{props.text}</Text>
    </View>
  )
}

// Local functions limitng to only this component
