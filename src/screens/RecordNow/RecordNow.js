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
  Text
 } from 'react-native';
import f from './function.js'
import styles from './style.js'
import Header from '../../components/header/mainHeader';
import {
  Container,
} from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class RecordNow extends Component {
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
          leftCallBack={()=> this.props.navigation.goBack()} 
          title="Record"/>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonTouchables}>
              <Icon name="microphone" style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Start secret audio recording</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.buttonTouchables}>
              <Icon name="video-camera" style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Start secret video recording</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textMainView}>
            <Text style={styles.textHeading}>How it works?</Text>
            <Text style={styles.textParagraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione excepturi fugiat officia enim voluptatum quas accusantium accusamus quibusdam necessitatibus, maxime nostrum, explicabo magni consectetur omnis aliquid. Qui ipsam fugiat numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis omnis, reprehenderit, blanditiis maxime ullam culpa et laborum dicta earum commodi minus voluptatum exercitationem? Ipsum nisi accusamus sapiente iure corrupti.</Text>
          </View>
        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(RecordNow)