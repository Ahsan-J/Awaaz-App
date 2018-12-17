import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  Text, 
  View,
  TouchableOpacity, 
} from 'react-native';
import { } from 'native-base'
import f, { applyBackgroundColor } from './function.js'
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
    if(this.props['hide']) {
      return null
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.touchable,applyBackgroundColor(this.props)]} onPress={this.props.onPress}>
          {/* Times cross Icon to disable notification*/}
          <TouchableOpacity style={styles.crossIconTouchable} onPress={this.props.onDismiss}>
            <Icon name="times" style={styles.crossIcon}/>
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.children}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

DashboardNotification.propTypes = {
  text : PropTypes.string,
  onDismiss : PropTypes.func,
  onPress : PropTypes.func,
  hide : PropTypes.bool,
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(DashboardNotification)