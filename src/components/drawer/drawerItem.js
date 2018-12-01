import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import { Container } from 'native-base'
import f from './function.js'
import styles from './style.js'

class DrawerItems extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Container style={styles.itemContainer}>
        <View style={styles.userWrapper}>

        </View>
      </Container>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(DrawerItems)