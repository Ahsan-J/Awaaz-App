import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import {Easing, Animated} from 'react-native'
import Home from '../screens/Home/home.js'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
},
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: true,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  });


export default createAppContainer(AppNavigator);
