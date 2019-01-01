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
  TouchableOpacity
} from 'react-native';
import f, { Circle } from './function.js'
import styles from './style.js'
import Header from '../../components/header/mainHeader';
import {
  Container,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Content,
  Icon as NBIcon,
  Picker
} from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class PostReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'The secret key'
    }
    this.getDetails = f.getDetails.bind(this);
    this.onValueChange = f.onValueChange.bind(this);
    this.componentDidMount = f.componentDidMount.bind(this);
  }
  render() {
    return (
      <Container>
        <Header
          leftCallBack={() => openDrawer()}
          title="Report" />
        <View style={styles.container}>

          <View style={styles.headingTextWrapper}>
            <View style={styles.headingTextContainer}>
              <Text style={styles.headingText}>Successfully Submitted</Text>
              <Text style={styles.headingSubText}>Successfully submitted your report for the harassment. Kindly note that at any phase you have any complain or wants to add some more info to help fasten the search, Kindly save this secret key so you can keep a track of the situations.You will be regularly be updated about the status of the case you filed based on the secret key</Text>
            </View>
          </View>

          <View style={styles.keyView}>
            <Text style={styles.text}>Secret key of the report : </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.secretKeyStyle}>{this.state.key}</Text>
              <TouchableOpacity>
                <Icon name="clipboard-check-outline" style={styles.clipboardIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonGroup}>
            <Button style={styles.skipButton}>
              <Text uppercase={false} style={styles.skipText}>Save</Text>
            </Button>
            <Button style={styles.nextButton} onPress={this.onNext}>
              <Text uppercase={false} style={styles.nextText}>OK</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(PostReport)