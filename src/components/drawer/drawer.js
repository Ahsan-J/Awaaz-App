import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import { Drawer } from 'native-base'
import f from './function.js'
import styles from './style.js'
import { setTopLevelDrawer, closeDrawer } from '../../helpers/drawerHelper'
import DrawerItems from './drawerItem.js'

class AwaazDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { setTopLevelDrawer(ref) }}
        content={<DrawerItems/>}
        type="displace"
        onClose={() => closeDrawer()} >
        <View style={{...this.props.style}}>
          {this.props.children}
        </View>
      </Drawer>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(AwaazDrawer)