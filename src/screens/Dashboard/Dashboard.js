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
  TouchableOpacity,
} from 'react-native';
import f from './function.js'
import Notification from '../../components/dashboardNotification/dashboardNotification.js'
import styles from './style.js'
import Header from '../../components/header/mainHeader';
import { Container, Content } from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import PieChart from '../../components/pieChart/pieChart.js'

const datasetEx = [{ value: 45, label: 'Sandwiches' },
{ value: 21, label: 'Salads' },
{ value: 15, label: 'Soup' },
{ value: 9, label: 'Beverages' },
{ value: 15, label: 'Desserts' }]

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideNotifcation: false
    }
    this.componentDidMount = f.componentDidMount.bind(this);
    this.renderQuickButtons = f.renderQuickButtons.bind(this);
  }
  render() {
    return (
      <Container>
        <Header
          iconLeft="menu"
          leftCallBack={() => openDrawer()}
          title="Awaaz" />
        <View style={styles.container}>
          <Content>
            {this.renderQuickButtons()}

            <Notification hide={this.state.hideNotifcation} onPress={() => console.log('Pressed')} onDismiss={() => this.setState({ hideNotifcation: true })}>
              Notification
          </Notification>

            <PieChart dataValues={datasetEx} title="My Case" />
          </Content>

        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(Dashboard)