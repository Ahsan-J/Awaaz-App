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
import State from '../../components/reportState/state.js';
import NumberSpinner from '../../components/numberSpinner/numberSpinner.js';

class Report_06 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evidences: 0,
      selfVictim: true,
    }
    this.onNext=f.onNext.bind(this);
    this.getDetails = f.getDetails.bind(this);
    this.onValueChange = f.onValueChange.bind(this);
    this.renderEvidenceDetails = f.renderEvidenceDetails.bind(this)
    this.componentDidMount = f.componentDidMount.bind(this);
  }
  render() {
    return (
      <Container>
        <Header
          leftCallBack={() => this.props.navigation.goBack()}
          title="Report" />
        <Content contentContainerStyle={styles.contentContainer} style={styles.container}>
          <State state={6} />
          <View style={styles.headingTextWrapper}>
            <View style={styles.headingTextContainer}>
              <Text style={styles.headingText}>Evidence Details</Text>
              <Text style={styles.headingSubText}>Help us out by providing some useful Information relating the case</Text>
            </View>
          </View>
          <Form style={styles.form}>
            <View style={styles.wrapperFileDetails}>
              <Text style={styles.fileIndex}>SNo</Text>
              <Text style={styles.fileName}>File Name</Text>
              <Text style={styles.fileSize}>Size </Text>
            </View>
            {this.renderEvidenceDetails()}
            <View style={styles.uploadButtonContainer}>
              <Circle icon="camera" />
              <Circle icon="video-camera" />
              <Circle icon="music" />
              <Circle icon="file-o" />
            </View>
          </Form>
          <View style={styles.authorityInformWrapper}>
            <View style={{ flex: 0.6 }}>
              <Text style={styles.text}>Authorities to Inform</Text>
            </View>
            <Item picker stackedLabel last style={[styles.item, { flex: 0.4 }]}>
              <View style={styles.input}>
                <Picker
                  mode="dropdown"
                  iosIcon={<NBIcon name="ios-arrow-down-outline" />}
                  style={{ color: '#ffffff' }}
                  placeholder="Authority"
                  placeholderStyle={{ color: "#ffffff" }}
                  placeholderIconColor="#ffffff"
                  selectedValue={this.state.authority}
                  onValueChange={this.onValueChange}
                >
                  <Picker.Item label="Authority01" value="key0" />
                  <Picker.Item label="Authority02" value="key1" />
                  <Picker.Item label="Authority03" value="key2" />
                  
                </Picker>
              </View>
            </Item>
          </View>
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

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(Report_06)