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
import styles from './style.js'
import Header from '../../components/header/mainHeader';
import { Content, Container, Form, Thumbnail, Item, Label, Picker, DatePicker, Button, Text } from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: undefined,
      chosenDate: new Date()
    }
    this.onValueChange2 = f.onValueChange2.bind(this);
    this.setDate = f.setDate.bind(this);
    this.componentDidMount = f.componentDidMount.bind(this);
  }
  render() {
    return (
      <Container>
        <Header
          leftCallBack={() => this.props.navigation.goBack()}
          title="Profile" />
        <View style={styles.container}>
          <Content>
            <View style={styles.avatarContainer}>
              <Thumbnail large source={require('../../assets/icons/avatar.png')} />
            </View>
            <View style={styles.formWrapper}>
              <Form style={styles.form}>
                <Item inlineLabel last style={styles.item} >
                  <Label style={styles.label}>Name</Label>
                  <Text style={styles.input}>Name</Text>
                </Item>
                <Item inlineLabel last style={styles.item} >
                  <Label style={styles.label}>Email</Label>
                  <Text style={styles.input}>Email</Text>
                </Item>
                <Item picker inlineLabel last style={styles.item}>
                  <Label style={styles.label}>Gender</Label>
                  <Text style={styles.input}>Male</Text>
                </Item>
                <Item picker inlineLabel last style={styles.item}>
                  <Label style={styles.label}>Date of birth</Label>
                  <Text style={styles.input}>DD\MM\YYYY</Text>
                </Item>
                <Item inlineLabel last style={styles.item} >
                  <Label style={styles.label}>Contact</Label>
                  <Text style={styles.input}>Contact</Text>
                </Item>
                <Text style={styles.statusText}>Your Account Credentials are anonymous.{'\n'}Your Identity is secret.</Text>
                <Button block style={styles.registerButton}>
                  <Text uppercase={false} style={styles.registerText}>Register Yourself</Text>
                </Button>
                <Text style={[styles.statusText,styles.postButtonText]}>Why Register?</Text>
              </Form>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(Profile)