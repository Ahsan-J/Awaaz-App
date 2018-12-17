import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { getDeviceWidth, getDeviceHeight, moderateScale } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.secondaryColor,
  },
  avatarContainer : {
    height : getDeviceHeight()*0.25,
    width : getDeviceWidth(),
    alignItems:'center',
    justifyContent:'center',
  },
  exchangeIconTouchable:{
    position:'absolute',
    top:0,
    right:0,
  },
  exchangeIcon : {
    fontSize:moderateScale(16),
    color : theme.primaryColor,
    padding:moderateScale(4),
  },
  formWrapper : {
    height:getDeviceHeight()*.95,
    alignItems:'center',
    justifyContent:'flex-start',
  },
  form : {
    height:getDeviceHeight()*0.9,
    width : getDeviceWidth()*0.95,
    justifyContent:'space-around'
  },
  item : {
    justifyContent:'space-between'
  },
  label : {
    flex: 0.43,
    paddingRight:0,
    marginRight : 0
  },
  input : {
    color : theme.fontPrimaryColor,
    flex:0.57,
  },
  genderPicker : {
    width:moderateScale(100),
  },
  registerButton : {
    backgroundColor : theme.primaryColor,
  },
  registerText : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(20)
  }
});
