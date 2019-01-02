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
  Textarea,
  Button,
  Text,
  Content,
  Picker
} from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import Icon from 'react-native-vector-icons/FontAwesome'

class PostReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'The secret key'
    }
    this.onOkay = f.onOkay.bind(this);
    this.getDetails = f.getDetails.bind(this);
    this.onValueChange = f.onValueChange.bind(this);
    this.componentDidMount = f.componentDidMount.bind(this);
  }
  render() {
    return (
      <Container>
        {/* <Header
          leftCallBack={() => openDrawer()}
          title="Report" /> */}
        <View style={styles.container}>

          <View style={styles.headingTextWrapper}>
            <View style={styles.headingTextContainer}>
              <Text style={styles.headingText}>What Happened?</Text>
              <Text style={styles.headingSubText}>Would you like to report the event ?</Text>
            </View>
          </View>
          <View style={styles.reportButtonContainer}>
            <Button style={styles.reportButton}>
              <Text style={styles.reportButtonText}>Report</Text>
            </Button>
          </View>
          <View style={styles.warningTextsContainer}>
            <Text style={styles.warningText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur facilis eos id cupiditate sed fugiat ratione similique a consequuntur, optio quidem et soluta doloribus voluptatem praesentium consectetur necessitatibus culpa sint.</Text>
          </View>
          <View>
            <Text style={styles.text_OR}>OR</Text>
          </View>
          <View style={styles.lowerStaticTextView}>
            <Text style={styles.headingSubText}>Tell us what caused you to Alert your location</Text>
          </View>
          <View>
            <Textarea rowSpan={5} style={styles.textArea} bordered placeholder="Tell us about the event" />
            <TouchableOpacity style={styles.sendIconWrapper}>
              <Icon name="paper-plane" style={styles.sendIcon}/>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(PostReport)