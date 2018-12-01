import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import f from './function.js'
import styles from './style.js'
import { connect } from 'react-redux'
import { Header, Left, Button, Icon, H2 } from 'native-base';


class MainHeader extends Component {

  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerLeft} onPress={this.props.leftCallBack}>
          <Icon name='menu' style={styles.headerLeftIcon}/>
        </TouchableOpacity>
        <View style={styles.headerBody}>
          <H2 style={styles.headerTitle}>{this.props.title}</H2>
        </View>
        <TouchableOpacity style={styles.headerRght}>

        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(f.mapStateToProps.bind(this),f.mapDispatchToProps.bind(this))(MainHeader)