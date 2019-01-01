import {StyleSheet} from 'react-native'
import { moderateScale, getDeviceHeight } from '../../helpers/sizeHelpers';
import theme from '../../constant/theme';

export default StyleSheet.create({
  container : {
    height:getDeviceHeight() * 0.11,
    flexDirection : 'row',
    // backgroundColor : 'blue',
    borderBottomWidth : moderateScale(1),
    borderColor : theme.fontPrimaryColor,
  },
  subContainer : {
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent : 'space-evenly'
  },
  circle :{
    width : moderateScale(45),
    height : moderateScale(45),
    borderRadius:moderateScale(45),
    borderColor : theme.fontPrimaryColor,
    borderWidth : moderateScale(1),
    justifyContent:'center',
    alignItems : 'center',
  }, 
  circleText : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(22),
  },
  circleFilled : {
    backgroundColor:theme.fontPrimaryColor,
    borderWidth:0
  },
  circleFilledText : {
    color : theme.fontSecondaryColor,
  }
});
