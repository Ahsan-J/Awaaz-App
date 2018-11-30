import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Navigator from './navigator/routes.js'
import {getDeviceHeight,getDeviceWidth} from './helpers/sizeHelpers.js'
import SplashScreen from 'react-native-splash-screen'

// Global Component to handle global files
export default class App extends Component {

  componentDidMount () {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height : getDeviceHeight(),
    width : getDeviceWidth(),
  },
});