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
  Image,
} from 'react-native';
import f from './function.js'
import styles from './style.js'
import Header from '../../components/header/mainHeader';
import { Container, Form, Thumbnail, Item, Label, Input, Button, Text } from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { replaceNavigate } from '../../helpers/navigationHelper.js'

class Login extends Component {
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
      <Container style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image resizeMode="contain" source={require('../../assets/images/red_awaaz.png')} />
        </View>
        <View style={styles.formWrapper}>
          <Form style={styles.form}>
            <View style={{flex:0.6,justifyContent:'flex-start'}}>
              <Item stackedLabel last style={styles.item} >
                <Label style={styles.label}>Email or Phone Number</Label>
                <Input style={styles.input} />
              </Item>
              <Item stackedLabel last style={styles.item} >
                <Label style={styles.label}>Password</Label>
                <Input style={styles.input} />
              </Item>
            </View>
            <View style={{flex:0.4,justifyContent:'space-around'}}>
              <Button block style={styles.registerButton} onPress={() => replaceNavigate("Dashboard")}>
                <Text uppercase={false} style={styles.registerText}>Login</Text>
              </Button>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button style={styles.facebookButton}>
                  <Icon name='facebook-official' style={styles.facebookIcon} />
                  <Text uppercase={false} style={styles.facebookText}> Log in with Facebook</Text>
                </Button>
                <Button style={styles.googleButton}>
                  <Icon name='google-plus' style={styles.googleIcon} />
                  <Text uppercase={false} style={styles.googleText}> Sign in with Google</Text>
                </Button>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={[styles.statusText, styles.postButtonText]}>Want to Register yourself?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.statusText, styles.postButtonText]}>Skip and Become "Anonymous"</Text>
            </TouchableOpacity>
          </Form>
        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(Login)