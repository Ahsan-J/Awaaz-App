import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View } from 'react-native';
import { Content, Button, Text } from 'native-base'
import f from './function.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style.js'

class DrawerItems extends Component {
  constructor(props) {
    super(props);
    this.renderDrawerItems = f.renderDrawerItems.bind(this);
  }
  render() {
    return (
      <Content style={styles.itemContainer}>
        <View style={styles.userWrapper}>

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