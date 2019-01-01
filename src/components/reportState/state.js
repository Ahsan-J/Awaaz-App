import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { } from 'native-base';
import f from './function.js';
import styles from './style.js';
import _ from 'lodash';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.renderCircleState = f.renderCircleState.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          {this.renderCircleState(this.props.state)}
        </View>
      </View>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(State)