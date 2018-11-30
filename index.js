/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/index.js';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import appStore from './src/redux/store.js'

class Awaaz extends React.Component {
  render(){
    return (
      <Provider store={appStore}>
        <App/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => Awaaz);
