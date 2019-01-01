import React from 'react';
import _ from 'lodash';
import styles from './style';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Item,
  Label,
  Input,
  Picker,
  DatePicker,
  Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import ReportStore from './store';
import NumberSpinner from '../../components/numberSpinner/numberSpinner.js';
import { navigate } from '../../helpers/navigationHelper';


export default {

  /**********************LifeCycle Components in Order **********************************/

  componentDidMount: function () {

  },

  /***********************Additonal Functions to be used within component ***************/

  getDetails: function (evidences) {
    this.setState({ evidences });
  },

  onValueChange: function () {

  },

  onNext:function (){
    navigate("PostReport")
  },

  renderEvidenceDetails: function () {
    return _.map(_.range(0, this.state.evidences), (index) => {
      return (
        <View key={index} style={styles.wrapperFileDetails}>
          <Text style={styles.fileIndex}>{index + 1 + " )"}</Text>
          <Text style={styles.fileName}>File Name that Uploaded</Text>
          <Text style={styles.fileSize}>100 mb</Text>
        </View>
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
// Stateless Components to be used

export const Circle = (props) => {
  return(
    <View style={[styles.circle,(props.filled) ? styles.circleFilled : {}]}>
      <Icon name={props.icon} style={styles.circleText}/>
      <TouchableOpacity style={styles.circleAddIconWrapper}>
        <Icon name="plus-circle" style={styles.circleAddIcon}/>
      </TouchableOpacity>
      {/* <Text style={[styles.circleText,(props.filled) ? styles.circleFilledText : {}]}>{props.text}</Text> */}
    </View>
  )
}

// Local functions limitng to only this component