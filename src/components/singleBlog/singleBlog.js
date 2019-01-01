import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  Text, 
  View, 
  Image,
} from 'react-native';
import { } from 'native-base'
import f from './function.js'
import styles from './style.js'

class SingleBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/600x300.png')} resizeMode={"stretch"} style={styles.blogImage}/>
        </View>
        <View style={styles.blogDetailsContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.date}>14</Text>
            <Text style={styles.month}>August</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.blogTitle}>Title</Text>
            <Text numberOfLines={3} style={styles.blogContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(SingleBlog)