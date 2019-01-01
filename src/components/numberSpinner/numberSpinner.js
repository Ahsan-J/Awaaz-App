import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, TouchableOpacity } from 'react-native';
import f from './function.js'
import styles from './style.js'
import {
  Text,

} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

class NumberSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : (this.props.value) ? this.props.value : 1,
      step : (this.props.step) ? this.props.step : 1,
    }
    this.onChange = f.onChange.bind(this);
    this.componentWillMount = f.componentWillMount.bind(this);
  }
  render() {
    return (
      <View style={[styles.container,this.props.style]}>
        <TouchableOpacity onPress={()=>this.onChange("MINUS")} style={[styles.buttonsTouchable,{borderTopLeftRadius:styles.container.borderRadius,borderBottomLeftRadius:styles.container.borderRadius}]}>
          <Icon name="minus" style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.counter}>{this.state.counter}</Text>
        <TouchableOpacity onPress={()=>this.onChange("PLUS")} style={[styles.buttonsTouchable,{borderTopRightRadius:styles.container.borderRadius,borderBottomRightRadius:styles.container.borderRadius}]}>
          <Icon name="plus" style={styles.icon}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(NumberSpinner)