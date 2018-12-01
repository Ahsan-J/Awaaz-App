import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import Navigator from './navigator/routes.js'
import {getDeviceHeight,getDeviceWidth} from './helpers/sizeHelpers.js'
import SplashScreen from 'react-native-splash-screen'
import Drawer from './components/drawer/drawer.js'

// Global Component to handle global files
export default class App extends Component {

  componentDidMount () {
    SplashScreen.hide();
  }

  render() {
    return (
      <Drawer style={styles.container}>
        <StatusBar hidden/>
        <Navigator />
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height : getDeviceHeight(),
    width : getDeviceWidth(),
  },
});