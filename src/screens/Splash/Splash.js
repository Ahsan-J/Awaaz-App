import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, Image } from 'react-native';
import { } from 'native-base'
import f from './function.js'
import styles from './style.js'

class Splash extends Component {
  state = {
    
  }
  componentWillMount = f.componentWillMount.bind(this);
  componentDidMount = f.componentDidMount.bind(this);
  render() {
    return (
      <Image source={{uri:'launch_screen'}} style={styles.launchImage}/>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(Splash)