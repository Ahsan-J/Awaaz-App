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
  Content,
  Form,
  Button,
  Textarea,
} from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import State from '../../components/reportState/state.js';

class Report_02 extends Component {
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
          leftCallBack={() => openDrawer()}
          title="Report" />
        <Content style={styles.container} contentContainerStyle={styles.contentContainer}>
          <State state={2} />
          <View style={styles.headingTextWrapper}>
            <Text style={styles.headingText}>Your Report</Text>
          </View>
          <Form style={styles.form}>
            <Item stackedLabel last style={styles.item} >
              <Label style={styles.label}>Name</Label>
              <Input style={styles.input} />
            </Item>
            <Item stackedLabel last style={styles.item} >
              <Label style={styles.label}>Name</Label>
              <Input style={styles.input} />
            </Item>
            <Item stackedLabel last style={styles.item} >
              <Label style={styles.label}>Name</Label>
              <Input style={styles.input} />
            </Item>
            <Item stackedLabel last style={styles.item} >
              <Label style={styles.label}>Name</Label>
              <Input style={styles.input} />
            </Item>
            <Item stackedLabel last style={styles.item} >
              <Label style={styles.label}>Name</Label>
              <Input style={styles.input} />
            </Item>
            <Textarea rowSpan={5} bordered placeholder="Event Description" />
          </Form>
          <View style={styles.buttonGroup}>
            <Button style={styles.skipButton}>
              <Text uppercase={false} style={styles.skipText}>Skip</Text>
            </Button>
            <Button style={styles.nextButton} onPress={this.onNext}>
              <Text uppercase={false} style={styles.nextText}>Next</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(Report_02)