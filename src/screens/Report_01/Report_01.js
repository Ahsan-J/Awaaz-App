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
import {
  Container,
  Text,
  Input,
  Item,
  Label,
  Form,
  Button,
} from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import State from '../../components/reportState/state.js';

class Report_01 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onNext = f.onNext.bind(this);
    this.componentDidMount = f.componentDidMount.bind(this);
  }
  render() {
    return (
      <Container>
        <Header
          leftCallBack={() => this.props.navigation.goBack()}
          title="Report" />
        <View style={styles.container}>
          <State state={1} />
          <View style={styles.headingTextWrapper}>
            <View style={styles.headingTextContainer}>
              <Text style={styles.headingText}>Your Information</Text>
              <Text style={styles.headingSubText}>Before Proceeding, Check the following details about yourself</Text>
            </View>
          </View>
          <Form style={styles.form}>
            <Item stackedLabel last style={styles.item} >
              <Label style={styles.label}>Name</Label>
              <Input style={styles.input} />
            </Item>
            <Item stackedLabel last style={styles.item} >
              <Label style={styles.label}>Email</Label>
              <Input style={styles.input} />
            </Item>
            <Item stackedLabel last style={styles.item} >
              <Label style={styles.label}>Gender</Label>
              <Input style={styles.input} />
            </Item>
            <Item stackedLabel last style={styles.item} >
              <Label style={styles.label}>Date of Birth</Label>
              <Input style={styles.input} />
            </Item>
            <Item stackedLabel last style={styles.item} >
              <Label style={styles.label}>Contact</Label>
              <Input style={styles.input} />
            </Item>
          </Form>
          <View style={styles.buttonGroup}>
            <Button style={styles.skipButton}>
              <Text uppercase={false} style={styles.skipText}>Skip</Text>
            </Button>
            <Button style={styles.nextButton} onPress={this.onNext}>
              <Text uppercase={false} style={styles.nextText}>Next</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(Report_01)