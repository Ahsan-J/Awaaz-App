import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { getDeviceWidth, moderateScale, verticalScale } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.secondaryColor,
  },
  quickButtonsContainer : {
    flexDirection:'row',
    flex:0.2
  },
  quickButton : {
    flex : 0.5,
    // backgroundColor:'red',
    justifyContent : "center",
    alignItems : 'center',
    borderColor : theme.primaryColor,
    borderWidth: 0.5
  },
  quickButtonIcon : {
    fontSize:moderateScale(35),
    color : theme.fontPrimaryColor,
  },
  quickButtonText : {
    marginTop : verticalScale(5),
    fontSize:moderateScale(18),
    color:theme.fontPrimaryColor,
  }
});
