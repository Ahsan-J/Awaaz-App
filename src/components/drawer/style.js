import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { getDeviceHeight, moderateScale, verticalScale } from '../../helpers/sizeHelpers'

export default StyleSheet.create({
  
  /* ****************************** */
  // Drawer Items

  itemContainer: {
    backgroundColor: theme.blackColor
  },
  userWrapper : {
    backgroundColor:theme.primaryColor,
    height:getDeviceHeight()*0.25
  },
  menuWrapper:{
    paddingLeft:moderateScale(25),
    // paddingRight:moderateScale(20),
  },
  menuButton : {
    height : verticalScale(30),
    marginTop : verticalScale(8),
    paddingLeft:moderateScale(10),
    justifyContent : 'flex-start'
  },
  activeMenuButton : {
    height : verticalScale(50),
    marginTop : verticalScale(10),
    backgroundColor : theme.primaryColor,
    paddingLeft:moderateScale(8),
    justifyContent : 'flex-start'
  },
  menuText : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(18),
    paddingLeft : moderateScale(8),
    paddingRight : moderateScale(8),
  },
  menuIcon : {
    fontSize : moderateScale(20),
    color : theme.fontPrimaryColor,
  }
});
