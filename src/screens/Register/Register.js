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
import { Container, Thumbnail, Item, Label, Picker, DatePicker, Button, Text } from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Content,
  Input,
  Form,
  Icon as NBIcon
} from 'native-base'

class Register extends Component {
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
          title="Register" />
        <View style={styles.container}>
          <Content>
            <View style={styles.avatarContainer}>
              <View>
                <Thumbnail large source={require('../../assets/icons/avatar.png')} />
                <TouchableOpacity style={styles.exchangeIconTouchable}>
                  <Icon name="exchange" style={styles.exchangeIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.formWrapper}>
              <Form style={styles.form}>
                <Item stackedLabel last style={styles.item} >
                  <Label style={styles.label}>Name</Label>
                  <Input style={styles.input}/>
                </Item>
                <Item stackedLabel last style={styles.item} >
                  <Label style={styles.label}>Email</Label>
                  <Input style={styles.input}/>
                </Item>
                <Item picker stackedLabel last style={styles.item}>
                  <Label style={styles.label}>Gender</Label>
                  <View style={styles.input}>
                    <Picker
                      mode="dropdown"
                      iosIcon={<NBIcon name="ios-arrow-down-outline" />}
                      style={{color:'#ffffff'}}
                      placeholder="Gender"
                      placeholderStyle={{ color: "#ffffff" }}
                      placeholderIconColor="#ffffff"
                      selectedValue={this.state.gender}
                      onValueChange={this.onValueChange2.bind(this)}
                    >
                      <Picker.Item label="Male" value="key0" />
                      <Picker.Item label="Female" value="key1" />
                      <Picker.Item label="Others" value="key2" />
                    </Picker>
                  </View>
                </Item>
                <Item picker stackedLabel last style={styles.item}>
                  <Label style={styles.label}>Date of birth</Label>
                  <View style={styles.input}>
                    <DatePicker
                      defaultDate={new Date(2018, 4, 4)}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={true}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="DD / MM / YYYY"
                      textStyle={{ color: "#ffffff" }}
                      placeHolderTextStyle={{ color: "#d3d3d3" }}
                      onDateChange={this.setDate}
                    />  
                  </View>
                </Item>
                <Item stackedLabel last style={styles.item} >
                  <Label style={styles.label}>Contact</Label>
                  <Input style={styles.input}/>
                </Item>
                <Item stackedLabel last style={styles.item}>
                  <Label style={styles.label}>Password</Label>
                  <Input style={styles.input}/>
                </Item>
                <Item stackedLabel last style={styles.item}>
                  <Label style={styles.label}>Confirm Password</Label>
                  <Input style={styles.input}/>
                </Item>
                <Button block style={styles.registerButton}>
                  <Text uppercase={false} style={styles.registerText}>Register</Text>
                </Button>
              </Form>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(Register)