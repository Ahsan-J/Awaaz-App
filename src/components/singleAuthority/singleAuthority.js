import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Text,
  View,
  Image,
} from 'react-native';
import { } from 'native-base'
import f from './function.js'
import styles from './style.js'

class SingleAuthority extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" source={require('../../assets/images/150x150.png')} style={{ width: styles.container.height, height: '100%' }} />
        </View>
        <View style={styles.mainView}>
          <Text style={styles.title}>Title or name of the Department</Text>
          <Text style={styles.areaOfExtertise}>Area of Expertise </Text>
          <Text style={styles.contact}>xxx-xxxxxxxx </Text>
          <Text style={styles.address}>Head: Division Address Division Address Division Address </Text>
        </View>
      </View>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(SingleAuthority)