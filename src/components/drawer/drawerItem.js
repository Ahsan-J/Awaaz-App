import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  View,
  TouchableOpacity
} from 'react-native';
import { Content, Button, Text, Thumbnail } from 'native-base'
import f from './function.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style.js'
import { navigate } from '../../helpers/navigationHelper.js';

class DrawerItems extends Component {
  constructor(props) {
    super(props);
    this.renderDrawerItems = f.renderDrawerItems.bind(this);
  }
  render() {
    return (
      <Content style={styles.itemContainer}>
        <View style={styles.userWrapper}>
          <View style={styles.userWrapperInner}>
            <TouchableOpacity style={styles.userWrapperTouchable} onPress={()=> navigate('Profile')}>
              <View style={styles.imageWrapper}>
                <Thumbnail large source={require('../../assets/icons/avatar.png')} />
              </View>
              <View style={styles.profileDetailWrapper}>
                <Text style={styles.profileName}>Name</Text>
                <Text style={styles.profileAccountType}>Account Type</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          {this.renderDrawerItems(this.props.activeRoute)}
          <Button style={styles.menuButton} transparent full>
            <Icon name="power-off" style={styles.menuIcon} />
            <Text uppercase={false} style={styles.menuText}>Logout</Text>
          </Button>
        </View>
      </Content>
    );
  }
}

export default connect(f.mapStateToProps, f.mapDispatchToProps)(DrawerItems)