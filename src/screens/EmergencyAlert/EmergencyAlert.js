/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  View,
  TouchableOpacity,
  Text,
  FlatList
} from 'react-native';
import f from './function.js'
import styles from './style.js'
import Header from '../../components/header/mainHeader';
import { Container } from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import Icon from 'react-native-vector-icons/FontAwesome'
import SingleAlert from '../../components/singleAlert/singleAlert.js'

class EmergencyAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.componentDidMount = f.componentDidMount.bind(this);
  }
  render() {
    return (
      <Container>
        <Header
          leftCallBack={() => this.props.navigation.goBack()}
          title="Emergency Alert" />
        <View style={styles.container}>
          <View style={styles.quickButtonsContainer}>
            <TouchableOpacity style={styles.quickButton}>
              <Icon name="exclamation-circle" style={styles.quickButtonIcon}/>
              <Text style={styles.quickButtonText}>Alert All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickButton}>
              <Icon name="ban" style={styles.quickButtonIcon}/>
              <Text style={styles.quickButtonText}>Stop All</Text>
            </TouchableOpacity>
          </View>
          <SingleAlert/>
        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(EmergencyAlert)