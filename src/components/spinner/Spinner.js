import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal'
// import f from './function.js'
import styles from './style.js'

const Spinner = (props) => {
  return (
    <Modal 
      isVisible={props.isVisible}
      animationIn="fadeIn" 
      animationOut="fadeOut" 
      style={styles.container}>
      <ActivityIndicator size="large"/>
    </Modal>
  );
}

export default Spinner 
// export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(Spinner)