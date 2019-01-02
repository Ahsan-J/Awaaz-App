import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Easing, Animated } from 'react-native';

import Dashboard from '../screens/Dashboard/Dashboard.js';
import Register from '../screens/Register/Register.js';
import EmergencyAlert from '../screens/EmergencyAlert/EmergencyAlert.js';
import FindAlert from '../screens/FindAlert/FindAlert.js';
import RecordNow from '../screens/RecordNow/RecordNow.js';
import MyCases from '../screens/MyCases/MyCases.js';
import AuthoritiesInfo from '../screens/AuthoritiesInfo/AuthoritiesInfo.js';
import Blogs from '../screens/Blogs/Blogs.js';
import AboutUs from '../screens/AboutUs/AboutUs.js';
import Profile from '../screens/Profile/Profile.js';
import Login from '../screens/Login/Login.js';
import Report_01 from '../screens/Report_01/Report_01.js';
import Report_02 from '../screens/Report_02/Report_02.js';
import Report_03 from '../screens/Report_03/Report_03.js';
import Report_04 from '../screens/Report_04/Report_04.js';
import Report_05 from '../screens/Report_05/Report_05.js';
import Report_06 from '../screens/Report_06/Report_06.js';
import PostReport from '../screens/PostReport/PostReport.js';
import Case from '../screens/Case/Case.js';
import Settings from '../screens/Settings/Settings.js';
import PostAlert from '../screens/PostAlert/PostAlert.js';

const AppNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Register: {
    screen: Register
  },
  Report_01: {
    screen: Report_01
  },
  Report_02: {
    screen: Report_02
  },
  Report_03: {
    screen: Report_03
  },
  Report_04: {
    screen: Report_04
  },
  Report_05: {
    screen: Report_05
  },
  Report_06: {
    screen: Report_06
  },
  PostReport : {
    screen : PostReport,
  },
  PostAlert : {
    screen : PostAlert,
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
  Case: {
    screen : Case
  },
  AuthoritiesInfo: {
    screen: AuthoritiesInfo
  },
  Blogs: {
    screen: Blogs
  },
  Settings :{
    screen : Settings
  },  
  AboutUs: {
    screen: AboutUs
  },
  Profile : {
    screen: Profile
  },
  Login : {
    screen : Login
  }
},
  {
    headerMode: 'none',
    initialRouteName: 'Login',
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
