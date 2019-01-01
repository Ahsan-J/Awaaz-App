/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View } from 'react-native';
import f from './function.js'
import styles from './style.js'
import Header from '../../components/header/mainHeader';
import {Container} from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';

class RecordNow extends Component {
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
          leftCallBack={()=> this.props.navigation.goBack()} 
          title="Record Now"/>
        <View style={styles.container}>
         
        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(RecordNow)