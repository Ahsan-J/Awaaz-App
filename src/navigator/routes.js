import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Easing, Animated } from 'react-native'
import Dashboard from '../screens/Dashboard/Dashboard.js'
import Register from '../screens/Register/Register.js'
import Report from '../screens/Report/Report.js'
import EmergencyAlert from '../screens/EmergencyAlert/EmergencyAlert.js'
import FindAlert from '../screens/FindAlert/FindAlert.js'
import RecordNow from '../screens/RecordNow/RecordNow.js'
import MyCases from '../screens/MyCases/MyCases.js'
import AuthoritiesInfo from '../screens/AuthoritiesInfo/AuthoritiesInfo.js'
import Blogs from '../screens/Blogs/Blogs.js'
import AboutUs from '../screens/AboutUs/AboutUs.js'

const AppNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Register: {
    screen: Register
  },
  Report: {
    screen: Report
  },
  EmergencyAlert: {
    screen: EmergencyAlert
  },
  FindAlert: {
    screen: FindAlert
  },
  RecordNow: {
    screen: RecordNow
  },
  MyCases: {
    screen: MyCases
  },
  AuthoritiesInfo: {
    screen: AuthoritiesInfo
  },
  Blogs: {
    screen: Blogs
  },
  AboutUs: {
    screen: AboutUs
  },
},
  {
    headerMode: 'none',
    initialRouteName: 'Dashboard',
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

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX }] };
      },
    }),
  });


export default createAppContainer(AppNavigator);
