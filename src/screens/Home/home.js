/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Platform, Text, View, Button } from 'react-native';
import f from './function.js'
import styles from './style.js'
import { addCount } from './fluxActions.js';
import Header from '../../components/header/mainHeader';
import {Container} from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.componentDidMount = f.componentDidMount.bind(this);
  }
  render() {
    return (
      <Container>
        <Header
          leftCallBack={()=> openDrawer()} 
          title="Home"/>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>{this.state.counter}To get started, edit App.js {this.props.counter}</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Button title="Count ++ from Redux" onPress={() => this.props.addCount(this.props.counter + 1)}></Button>
          <Button title="Count ++ from Flux" onPress={() => addCount(this.state.counter + 1)}></Button>
        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(Home)