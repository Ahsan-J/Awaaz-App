import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { } from 'native-base'
import f from './function.js'
import styles from './style.js'

class SingleCase extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.timeContainer}>
          <Text style={styles.date}>14</Text>
          <Text style={styles.month}>August</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.caseReportedTitle}>Reported_To</Text>
          <View style={styles.subDetailsContainer}>
            <Text style={styles.subDetailsText}>reported as: Victim</Text>
            <Text style={styles.subDetailsText}>status</Text>
          </View>
          <View style={styles.subDetailsContainer}>
            <Text style={styles.subDetailsText}>Location: Karachi</Text>
            <Text style={styles.subDetailsText}>event_date</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(SingleCase)