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
  Text, 
} from 'react-native';
import f from './function.js'
import styles from './style.js'
import Header from '../../components/header/mainHeader';
import { Container, Content } from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';


class MyCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed : {}
    }
    this.toggleCollapse = f.toggleCollapse.bind(this);
    this.renderHarasser = f.renderHarasser.bind(this);
    this.renderCollapsibleReport = f.renderCollapsibleReport.bind(this);
    this.renderVictims = f.renderVictims.bind(this);
    this.renderWitnesses = f.renderWitnesses.bind(this);
    this.renderProgress = f.renderProgress.bind(this);
    this.renderInvolvedAuthorites = f.renderInvolvedAuthorites.bind(this);
    this.renderEvidences = f.renderEvidences.bind(this);
    this.renderReport = f.renderReport.bind(this);
    this.getReportData = f.getReportData.bind(this);
    this.componentDidMount = f.componentDidMount.bind(this);
  }
  render() {
    return (
      <Container>
        <Header
          leftCallBack={() => this.props.navigation.goBack()}
          title="Case" />
        <Content contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
          {this.renderCollapsibleReport()}
        </Content>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(MyCases)