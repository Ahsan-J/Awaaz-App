import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import Navigator from './navigator/routes.js'
import { getDeviceHeight, getDeviceWidth } from './helpers/sizeHelpers.js'
import SplashScreen from 'react-native-splash-screen'
import Drawer from './components/drawer/drawer.js'
import { getActiveRouteName, setTopLevelNavigator } from './helpers/navigationHelper.js'
import { connect } from 'react-redux'
import { setActiveRoute } from './redux/actions/general.js';
import { closeDrawer } from './helpers/drawerHelper.js';

// Global Component to handle global files
class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Drawer style={styles.container}>
        <StatusBar hidden />
        <Navigator
          ref={navigator => setTopLevelNavigator(navigator)}
          onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = getActiveRouteName(currentState);
            const prevScreen = getActiveRouteName(prevState);

            if (prevScreen !== currentScreen) {
              this.props.setActiveRoute(currentScreen);
              closeDrawer();
            }
          }}
        />
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveRoute: (route) => dispatch(setActiveRoute(route))
  }
}

const styles = StyleSheet.create({
  container: {
    height: getDeviceHeight(),
    width: getDeviceWidth(),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App)