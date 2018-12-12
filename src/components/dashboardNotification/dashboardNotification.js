import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  Text, 
  View,
  TouchableOpacity, 
} from 'react-native';
import { } from 'native-base'
import f from './function.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style.js'
import PropTypes from 'prop-types';

class DashboardNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={this.props.onSelect}>
          {/* Times cross Icon to disable notification*/}
          <TouchableOpacity style={styles.crossIconTouchable} onPress={this.props.onDismiss}>
            <Icon name="times" style={styles.crossIcon}/>
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

DashboardNotification.propTypes = {
  text : PropTypes.string,
  onDismiss : PropTypes.func,
  onSelect : PropTypes.func
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(DashboardNotification)