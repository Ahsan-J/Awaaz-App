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
import f from './function.js'
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
  Radio
} from 'native-base'
import { openDrawer } from '../../helpers/drawerHelper.js';
import State from '../../components/reportState/state.js';
import NumberSpinner from '../../components/numberSpinner/numberSpinner.js';

class Report_05 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      victims : 0,
      selfVictim : true,
    }
    this.getVictimCount = f.getVictimCount.bind(this);
    this.onValueChange = f.onValueChange.bind(this);
    this.renderVictimFields = f.renderVictimFields.bind(this)
    this.componentDidMount = f.componentDidMount.bind(this);
  }
  render() {
    return (
      <Container>
        <Header
          leftCallBack={() => openDrawer()}
          title="Report" />
        <Content contentContainerStyle={styles.contentContainer} style={styles.container}>
          <State state={5} />
          <View style={styles.headingTextWrapper}>
            <Text style={styles.headingText}>Harasser Info</Text>
          </View>
          <Form style={styles.form}>
            <View style={styles.victimsControls}>
              <View style={styles.radioQuestionWrapper}>
                <View style={{flex:0.6}}>
                  <Text style={styles.radioText}>Do you know the Harasser ?</Text>
                </View>
                <TouchableOpacity style={styles.radioOption} onPress={()=> this.setState({selfVictim:true})}>
                  <Text style={styles.radioText}>Yes</Text><Radio onPress={()=> this.setState({selfVictim:true})} selected={this.state.selfVictim} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.radioOption} onPress={()=> this.setState({selfVictim:false})}>
                  <Text style={styles.radioText}>No</Text><Radio onPress={()=> this.setState({selfVictim:false})} selected={!this.state.selfVictim} />
                </TouchableOpacity>
              </View>
              <View style={styles.radioQuestionWrapper}>
                <Text style={[styles.radioText]}>Number of Harassers(s)</Text>
                <NumberSpinner value={this.state.victims} step={1} onChange={this.getVictimCount}/>
              </View>
            </View>
            {this.renderVictimFields()}
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

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(Report_05)