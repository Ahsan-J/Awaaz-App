import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Text, 
  View,
  TouchableOpacity
 } from 'react-native';
import f from './function.js';
import styles from './style.js';
import Icon from 'react-native-vector-icons/FontAwesome'

class SingleAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainSide}>
          <View style={styles.nameAndStatusContainer}>
            <Text style={[styles.text,styles.nameText]}> Friend Name</Text>
            <Text style={styles.text}>Status </Text>
          </View>
          <View style={styles.relationContainer}>
            <Text style={styles.text}> Relation: </Text>
            <Text style={styles.text}> myrelation</Text>
          </View>
          <View style={styles.contactContainer}>
            <Text style={styles.text}> Contact: </Text>
            <Text style={styles.text}> +xx-xxx-xxxxxxx</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.sideButton}>
          <Icon name="exclamation-circle" style={styles.sideButtonIcon}/>
          <Text style={[styles.text,styles.sideButtonText]}>Alert</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(SingleAlert)