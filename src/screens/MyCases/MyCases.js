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
import { Container } from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import SingleCase from '../../components/singleCase/singleCase.js';
import { navigate } from '../../helpers/navigationHelper.js'

class MyCases extends Component {
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
          leftCallBack={() => this.props.navigation.goBack()}
          title="My Cases" />
        <View style={styles.container}>
          <SingleCase onPress={() => navigate("Case")} />
        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(MyCases)